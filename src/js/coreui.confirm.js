
var CoreUI = typeof CoreUI !== 'undefined' ? CoreUI : {};

CoreUI.confirm = {

    _dialog: null,

    /**
     * @param title
     * @param message
     * @param options
     */
    default: function (title, message, options) {
        this._create(title, message, options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    warning: function (title, message, options) {

        options = typeof options === 'object' ? options : {};
        options.titleColor = "#e65100";

        this._create(title, message, options);
    },


    /**
     * @param title
     * @param message
     * @param options
     */
    danger: function (title, message, options) {

        options = typeof options === 'object' ? options : {};
        options.titleColor = "#f44336";

        this._create(title, message, options);
    },


    /**
     * @param title
     * @param message
     * @param options
     * @returns {MDCDialog}
     */
    _create: function(title, message, options) {

        if (CoreUI.confirm._dialog) {
            CoreUI.confirm._dialog.close();
        }

        options = options || {};

        let titleColor = typeof options['titleColor'] === 'string'
            ? 'style="color: ' + options['titleColor'] + '"'
            : '';

        let messageColor = typeof options['messageColor'] === 'string'
            ? 'style="color: ' + options['messageColor'] + '"'
            : '';

        let cancelButtonText = typeof options['cancelBtnText'] === 'string'
            ? options['cancelBtnText']
            : 'Отмена';

        let cancelButtonColor = typeof options['cancelBtnColor'] === 'string'
            ? 'style="background-color: ' + options['cancelBtnColor'] + '"'
            : '';

        let acceptButtonText = typeof options['acceptBtnText'] === 'string'
            ? options['acceptBtnText']
            : 'Да';

        let acceptBtnColor = typeof options['acceptBtnColor'] === 'string'
            ? 'style="background-color: ' + options['acceptBtnColor'] + '"'
            : '';

        let tplTitle = title
            ? '<h2 class="mdc-dialog__title" ' + titleColor + '>' + title + '</h2>'
            : '';

        let tplMessage = message
            ? '<div class="mdc-dialog__content" ' + messageColor + '>' + message + '</div>'
            : '';

        $('body').append(
            '<div class="mdc-dialog" id="dialog-confirm">' +
                '<div class="mdc-dialog__container">' +
                    '<div class="mdc-dialog__surface" role="alertdialog" aria-modal="true" ' +
                         'aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content">' +
                        tplTitle +
                        tplMessage +
                        '<div class="mdc-dialog__actions gap-2">' +
                            '<button type="button" class="btn btn-sm btn-light" ' +
                                    'data-mdc-dialog-action="cancel" ' + cancelButtonColor + '>' +
                                cancelButtonText +
                            '</button>' +
                            '<button type="button" class="btn btn-sm btn-light" ' +
                                    'data-mdc-dialog-action="accept" ' + acceptBtnColor + '>' +
                                acceptButtonText +
                            '</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="mdc-dialog__scrim"></div>' +
            '</div>'
        );

        let dialogElement = $('#dialog-confirm:not(.mdc-dialog--closing)');
        let dialog        = new CoreUI.confirm.mdcDialog.MDCDialog(dialogElement[0]);

        dialog.listen('MDCDialog:closing', function(data) {
            if (typeof options['onClose'] === 'function') {
                options['onClose']();
            }

            switch (data.detail.action) {
                case 'accept':
                    if (typeof options['onAccept'] === 'function') {
                        options['onAccept']();
                    }
                    break;

                case 'cancel':
                    if (typeof options['onCancel'] === 'function') {
                        options['onCancel']();
                    }
                    break;
            }
        });

        dialog.listen('MDCDialog:closed', function(data) {
            dialogElement.remove();

            if (typeof options['onClosed'] === 'function') {
                options['onClosed']();
            }
        });

        dialog.open();

        CoreUI.confirm._dialog = dialog;

        return dialog;
    },
}