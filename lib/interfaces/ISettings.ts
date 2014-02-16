import IEditorConfigSettings = require('./IEditorConfigSettings');


interface ISettings extends IEditorConfigSettings {
	quote_type: string;
	space_after_anonymous_functions: boolean;
	space_after_control_statements: boolean;
	spaces_around_operators: boolean;
	spaces_in_brackets: boolean;
}

export = ISettings;
