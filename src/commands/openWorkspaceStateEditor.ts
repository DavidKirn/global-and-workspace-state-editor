import * as vscode from 'vscode';

export function registerOpenWorkspaceStateEditorCommand(context: vscode.ExtensionContext) {
    return vscode.commands.registerCommand("gwse.openWorkspaceStateEditor", () => {
        console.log(context.workspaceState.keys());
    });
}