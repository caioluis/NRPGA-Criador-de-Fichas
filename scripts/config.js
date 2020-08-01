editor = CKEDITOR.replace('historia', {
height: 300,
language: 'pt-br',
coreStyles_bold: { element: 'strong', overrides: 'false'},
toolbarGroups: [
	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
	{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
	{ name: 'forms', groups: [ 'forms' ] },
	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
	{ name: 'links', groups: [ 'links' ] },
	{ name: 'insert', groups: [ 'insert' ] },
	{ name: 'styles', groups: [ 'styles' ] },
	{ name: 'colors', groups: [ 'colors' ] },
	{ name: 'tools', groups: [ 'tools' ] },
	{ name: 'others', groups: [ 'others' ] },
	{ name: 'about', groups: [ 'about' ] }
],

removeButtons: 'Save,Templates,NewPage,Preview,Print,Cut,Undo,Copy,Redo,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Subscript,Superscript,Outdent,Indent,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Link,Unlink,Anchor,Image,Flash,Table,HorizontalRule,PageBreak,Iframe,Styles,Format,Font,FontSize,ShowBlocks,About'
})

editor.addCommand("inserirSubtitulo", {
	exec : function( editor ) {
		var textoSelecionado = editor.getSelection().getSelectedText();
		var novoSubtitulo = new CKEDITOR.dom.element("b");
		novoSubtitulo.setText(textoSelecionado);
		editor.insertElement(novoSubtitulo);
	  }
});
editor.ui.addButton('Subtitulo', {
    label: "Adicionar subtítulo",
    command: 'inserirSubtitulo',
    toolbar: 'insert',
    icon: 'https://image.flaticon.com/icons/svg/52/52326.svg'
});
