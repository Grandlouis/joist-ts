import {IntegrationHandler} from "../index";
import traverse, { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { EntityDbMetadata } from "joist-codegen";
import * as path from "path";
import {newComment} from "../utils";


/**
 * Handles the fully code generated *Codegen.ts files.
 *
 * Integrates docs within
 * - Field setters & getters
 * - Field properties on the Opts interface
 */
export const entityCodegenIntegration: IntegrationHandler<EntityDbMetadata> = {
    file: (entity, config) => path.join(config.entitiesDirectory, `${entity.name}Codegen.ts`),
    commentStoreHash: (entity, commentStore) => commentStore.hashForEntity(entity),
    async handle(source, entity, commentStore) {
        let opts = undefined as NodePath<t.TSInterfaceDeclaration> | undefined;
        let klass = undefined as NodePath<t.ClassDeclaration> | undefined;

        traverse(source, {
            ClassDeclaration(path) {
                if (path.node.id.name === `${entity.name}Codegen`) {
                    klass = path as NodePath<t.ClassDeclaration>;
                }
            },
            TSInterfaceDeclaration(path) {
                if (path.node.id.name === `${entity.name}Opts`) {
                    opts = path as NodePath<t.TSInterfaceDeclaration>;
                }
            },
        });

        // handle the class
        if (klass) {
            const rootComment = await commentStore.forEntity(entity);
            if (rootComment) {
                // parent because the export statement is it's own node with children.
                // a lower version of @babel/types is getting in here, which is odd.
                (klass.parent.leadingComments as t.Comment[]) = [newComment(rootComment)];
            }

            for (const member of klass.node.body.body) {
                if (t.isClassMethod(member) && t.isIdentifier(member.key)) {
                    const comment = await commentStore.forField(entity, member.key.name, member.kind === "get" ? "get" : "set");

                    if (comment) {
                        member.leadingComments = [newComment(comment)];
                    }
                }
            }
        }

        if (opts) {
            for (const property of opts.node.body.body) {
                if (t.isTSPropertySignature(property) && t.isIdentifier(property.key)) {
                    const comment = await commentStore.forField(entity, property.key.name, "opts");

                    if (comment) {
                        property.leadingComments = [newComment(comment)];
                    }
                }
            }
        }

        return source;
    }
}