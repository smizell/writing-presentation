# Design

## Door
This is our door. We'd have some nice description here about it.

### Attributes
- `isLocked` (boolean)
- `isClosed` (boolean)

### Affordances
- `open`
- `close`
- `lock`
- `unlock`

### States
- `closed-locked`
  - Affordances
    - `unlock` to `closed-unlocked`
- `closed-unlocked`
  - Affordances
    - `lock` to `closed-locked`
    - `open` to `openned-unlocked`
- `openned-unlocked`
  - Affordances
    - `close` to `closed-unlocked`
- `openned-locked`
  - Affordances
    - `unlock` to `openned-unlocked`

## User
This is our user. We'd have a nice description here about it.

### Attributes
- `hasKey` (boolean) - Tells whether the user has a key
