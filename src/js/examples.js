document.addEventListener('DOMContentLoaded', function () {

    // Simple
    $('#confirm-default').click(function () {
        CoreUI.confirm.default("Confirm title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

    $('#confirm-warning').click(function () {
        CoreUI.confirm.warning("Confirm title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

    $('#confirm-danger').click(function () {
        CoreUI.confirm.danger("Confirm title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });



    $('#confirm-custom').click(function () {
        CoreUI.confirm.default("Confirm title", "Raw denim you probably haven't heard of them jean shorts Austin?", {
            titleColor: '#e91e63',
            messageColor: '#9c27b0',
            cancelBtnText: 'Не хочу',
            cancelBtnColor: '#ffd54f',
            acceptBtnText: 'Да, отлично',
            acceptBtnColor: '#aed581',
            onClose: function () {
                console.log('close')
            },
            onClosed: function () {
                console.log('closed')
            },
            onAccept: function () {
                console.log('accept')
            },
            onCancel: function () {
                console.log('cancel')
            }
        });
    });



    // Code highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});