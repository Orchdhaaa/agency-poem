# agency-poem-01

A small Node program for make.fun's "Write the best poem about agency"
competition. It writes one short, original poem about agency — the power
to choose and to act, and what it means to hand that power over and take
it back — to `entry.txt` in the output directory.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It is deterministic: two runs write identical bytes. Standard library only,
no network.
