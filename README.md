Single `compose()` function, taken from Andrew Clark's [recompose](https://github.com/acdlite/recompose) library.

```js
const composedHoc = compose(hoc1, hoc2, hoc3)

// Same as
const composedHoc = BaseComponent => hoc1(hoc2(hoc3(BaseComponent)))
```

Install:

```
npm i -s hoc-compose
```

Example usage:

```js
import { compose } from 'hoc-compose'

// ... your code

export default compose(
  withRouter,
  withApi,
  withStyles(styles)
)(MyComponent);

```

Would be equivalent to exporting with:

```js
export default withRouter(withApi(withStyles(styles)(MyComponent)));
```
