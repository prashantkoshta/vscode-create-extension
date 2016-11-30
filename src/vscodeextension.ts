'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    vscode.commands.registerCommand('vsext.generateNewExtension', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("yo code");
    });

    vscode.commands.registerCommand('vsext.vscePublish', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("vsce publish");
    });
    
    vscode.commands.registerCommand('vsext.vsceCreatePublisher', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("vsce create-publisher");
    });

    vscode.commands.registerCommand('vsext.vsceLogin', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("vsce login");
    });

    vscode.commands.registerCommand('vsext.vscePublishbyToken', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("vsce publish -p");
    });

     vscode.commands.registerCommand('vsext.vscePublishMinor', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("vsce publish minor");
    });

     vscode.commands.registerCommand('vsext.vscePublishVersion', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("vsce publish");
    });

    vscode.commands.registerCommand('vsext.vscePackage', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("vsce package");
    });

    vscode.commands.registerCommand('vsext.installExtension', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("VSCode");
        terminal.show(true);
        terminal.sendText("code --install-extension");
    });
}

// this method is called when your extension is deactivated
export function deactivate() {
}