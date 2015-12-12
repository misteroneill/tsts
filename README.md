# tsts

> **T**emplate **S**tring **T**ag**S**

`tsts` exposes a number of function(s) for use as ES6 [template string tags][tst], which are functions that can be used to alter the output of an ES6 template string.

## Install

```sh
$ npm install --save tsts
```

## Usage

`tsts` can be used anywhere that supports ES6 template strings, such as:

- Node 4.x and higher:

  ```js
  const tsts = require('tsts');
  ```

- Babel

  ```js
  import * as tsts from 'tsts';
  ```

In each of these cases, `tsts` is an object with the API attached to it.

## API

### `join` / `tsts.join`

Break long, multi-word strings (i.e., sentences) into multiple lines.

Any sequence of whitespace characters will be replaced by a single space. The result is trimmed.

Identical to [`tsmlj`][tsmlj].

```js
import {join} from 'tsts';

join`
  The path of the righteous man   is beset on all sides by the
  inequities of the    selfish and the tyranny of evil men.

  Blessed is he who, in the name of charity and good will,
    shepherds the
  weak through the        valley of the darkness, for he is truly his
  brother's keeper and the finder of lost children.
`
```

```
The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother's keeper and the finder of lost children.
```

### `pre` / `tsts.pre`

Create formatted text blocks which can be indented to match your code. Supports either spaces or tabs.

In other words, it takes a preformatted text block, outdents it to match the furthest-left line, and retains any deeper indentation and internal new-lines. The result is trimmed.

Identical to [`tsmlb`][tsmlb].

```js
import {pre} from 'tsts';

pre`
  The path of the righteous man is beset
      on all sides
    by the inequities of the selfish and the tyranny of evil men.

    Blessed is he who,
      in the name of charity and good will,
    shepherds the weak
      through the valley of the darkness,
    for he is truly his brother's keeper and the finder of lost children.
`;
```

```
The path of the righteous man is beset
    on all sides
  by the inequities of the selfish and the tyranny of evil men.

  Blessed is he who,
    in the name of charity and good will,
  shepherds the weak
    through the valley of the darkness,
  for he is truly his brother's keeper and the finder of lost children.
```

### `squash` / `tsts.squash`

This method uses Rod Vagg's `tsml`; refer to [its documentation][tsml] for more information!

```js
import {squash} from 'tsts';

squash`
  one
  two
  three
`;
```

```
onetwothree
```

## License

`tsts` is Copyright (c) 2015 Pat O'Neill and licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved.

`tsml` is Copyright (c) 2015 Rod Vagg [@rvagg][rvagg] and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved.

[rvagg]: https://twitter.com/rvagg
[tsml]: https://github.com/rvagg/tsml
[tsmlb]: https://github.com/misteroneill/tsmlb
[tsmlj]: https://github.com/misteroneill/tsmlj
[tst]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings
