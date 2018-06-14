# Usage

To decode a base64 string:

```
echo 'bXkgc3RyaW5n' | base64-decode
```

This yields:

```
my string
```


To encode a base64 string:

```
echo 'my string' | base64-encode
```

This yields:

```
bXkgc3RyaW5nCg==
```
