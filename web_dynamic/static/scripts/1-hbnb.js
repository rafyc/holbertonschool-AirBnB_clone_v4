#!/usr/local/bin/node
const dict = {};
$(document).ready(() => {
  ($('input[type=checkbox]').change(function () {
    if (this.checked) {
      dict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete dict[$(this).attr('data-id')];
    }
  }));
});
