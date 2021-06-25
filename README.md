# mirror
## Usage

A confortable way of writing constants with same key/value...

```javascript
import mirror from 'mirror';

const ActionTypes = mirror([
    'FETCH_REQUEST',
    'FETCH_COMMIT',
    'FETCH_ROLLBACK',
]);

console.log(ActionTypes.FETCH_REQUEST); // 'FETCH_REQUEST'

```

With possibility to add a prefix, usefull to build constants by domain !

```javascript
import mirror from 'mirror';

const ActionTypes = mirror([
    'FETCH_REQUEST',
    'FETCH_COMMIT',
    'FETCH_ROLLBACK',
], 'MY_DOMAIN');

console.log(ActionTypes.MY_DOMAIN_FETCH_REQUEST); // 'MY_DOMAIN_FETCH_REQUEST'

```

## Install

`npm i mirror`
