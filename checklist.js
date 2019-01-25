(function (window) {
'use strict';

var App = window.App || {};
var $ = window.jQuery;

function CheckList(selector) {
  if (!selector) {
    throw new Error('No selector provided');
  }

CheckList.prototype.addClickHandler = function (fn) {
  this.$element.on('click', 'input', function (event) {
    var text = event.target.value;
    this.removeRow(text);
    fn(text);
  }.bind(this));
};

  CheckList.prototype.addRow = function (issueId) {
    this.removeRow(issueId.assignee);
    var rowElement = new Row(issueId);
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function (text) {
    this.$element
    .find('[value="' + text + '"]')
    .closest('[issues="checkbox"]')
    .remove();
  };

  this.$element = $(selector);
  if (this.$element.length === 0) {
    throw new Error('Could not find element with selector: ' + selector);
    }
}

function Row(issueId) {
  var $div = $('<div></div>', {
    'issues': 'checkbox',
    'class': 'checkbox'
  });

  var $label = $('<label></label>');

  var $checkbox = $('<input></input>', {
    type: 'checkbox',
    value: issueId.assignee
  });

  var description = issueId.size + ' ';
  if (issueId.created) {
    description += issueId.created + ' ';
  }

  description += issueId.id + ', ';
  description += ' (' + issueId.assignee + ')';
  description += ' [' + issueId.updated + 'x]';

  $label.append($checkbox);
  $label.append(description);
  $div.append($label);

  this.$element = $div;
}

App.CheckList = CheckList;
window.App = App;
})(window);
