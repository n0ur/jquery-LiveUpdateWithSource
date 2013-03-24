# jquery-LiveUpdateWithSource

**jQuery Live Update With Source** is based on this implementation of [Live Search](http://ejohn.org/apps/livesearch/), it does exactly the same, except the data to be filtered is in the form of an external JSON object.


## Usage
#### Here's a [Demo](http://n0ur.github.com/jquery-LiveUpdateWithSource/)

```js
$("input").liveUpdateWithSource("list", "url", max);
```
- **input**: input search box, as you type things in it the results will be filtered

- **list**: selector of the unordered list where filtered results will be shown

- **url**: URL you want to send the GET request to, it expects the response to be a JSON in this format:  

```js
[{"name":"value1"}, {"name":"value2"}, {"name":"value3"}]
```
- **max**: integer to represent the maximum number of results you want to be shown (the ones with the highest scores). don't include this if you want all matched results to be shown.

Simple and straight forward! 

This is very customizable: you'd probably want to edit the HTML structure in which results are shown, edit the format of the JSON object, and maybe other things. It shouldn't be any problem and hopefully this will serve as a basic guide. 

If you have any suggestions or feedback, please don't hesitate to contact me!

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
