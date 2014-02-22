export interface IToken {
	type: string;
}

export interface IProgramToken extends IToken {
	body: IToken[];
}

//export interface IVariableDeclarationToken extends IToken {
//	declarations: IVariableDeclaratorToken[];
//}

//export interface IVariableDeclaratorToken extends IToken {
//	id: IIdentifierToken;
//	init: IBinaryExpressionToken;
//	kind: string;
//}

//export interface IIdentifierToken extends IToken {
//	name: string;
//}

//export interface IBinaryExpressionToken extends IToken {
//	operator: string;
//	left: ILiteralToken;
//	right: ILiteralToken;
//}

//export interface ILiteralToken extends IToken {
//	value: any;
//	raw: string;
//}
