# js-tabs - simple jQuery tabs

## Description

Simple class for tabs.

## Browser support

Internet Explorer 8 and (almost) anything newer ;)

## Options

Name        | Type       | Default    | Description
:---------- | :--------- | :--------- | :-----------
activeClass | String     | active     | class of the selected item and tab
tabs        | String     | li         | parent element to which the active class will be assigned, or null for the selected link
open        | Boolean    | true       | disable automatic opening of the tab based on the current hash

## Usage

```javascript
$("#target").tabs({});
```