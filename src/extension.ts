import * as vscode from 'vscode';
import { registerOpenWorkspaceStateEditorCommand } from './commands/openWorkspaceStateEditor';

export function activate(context: vscode.ExtensionContext) {
	const testConfigs = [
		"172.21.89.30",
		"172.21.89.31",
		"172.21.89.32",
		"172.21.89.33",
		"172.21.89.34",
		"172.21.89.35",
		"172.21.89.36",
		"172.21.89.37",
		"172.21.89.38",
		"172.21.89.39",
	];
	context.workspaceState.update("recentlyUsedTestConfigurations", testConfigs);

	context.subscriptions.push(registerOpenWorkspaceStateEditorCommand(context));
}

export function deactivate() {}
