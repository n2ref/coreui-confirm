# CoreUI Confirm

**[DEMO](https://shabuninil.github.io/coreui-confirm)**

## Install with npm
`$ npm install coreui-confirm`

## Example

```html
<button class="btn btn-sm btn-secondary" id="confirm-default">Default</button>
<button class="btn btn-sm btn-warning" id="confirm-warning">Warning</button>
<button class="btn btn-sm btn-danger" id="confirm-danger">Danger</button>

<script>
    $('#confirm-default').click(function () {
        CoreUI.confirm.default("Confirm title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

    $('#confirm-warning').click(function () {
        CoreUI.confirm.warning("Confirm title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });

    $('#confirm-danger').click(function () {
        CoreUI.confirm.danger("Confirm title", "Raw denim you probably haven't heard of them jean shorts Austin?");
    });
</script>
```

Result

![Confirm](https://raw.githubusercontent.com/shabuninil/coreui-confirm/main/preview.png)
