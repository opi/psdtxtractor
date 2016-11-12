# psdtxtractor

***PSD Text Extractor***

Extract text layer (data, font family, size and color) from a PSD file.

## Install

```
npm install -g psdtxtractor
```


## Usage

```
psdtxtractor /path/to/file.psd
```

You may want to save the command output:

```
psdtxtractor /path/to/file.psd > file.psd.yml
```

## Output example

```yml
- Layer [Some-Image-Layer]
- Group [SomeGroup]:
    - Group [SomeSubGroup]:
        - Layer [foo]
        - Layer [bar]
    - Group [SubGroup2]:
        - Layer [Rectangle 33]
        - Text Layer [Lorem Ipsum dolor sit amet]:
            - Font: Times-BoldItalic
            - Size(s): 24.00
            - Color 0: rgba(0,0,0, 255) or 000000, opacity = 1
- Group [SecondGroup]:
    - Layer [Title-and-menu]
    - Group [TEXT]:
        - Layer [Shape 1]
        - Layer [Shape 1 copy 1]
        - Text Layer [Lorem ipsum dolor sit amet]:
            - Font: Arial-BoldMT
            - Size(s): 16, 16, 16
            - Color 0: rgba(47,47,47, 255) or 2f2f2f, opacity = 1
```


## Bugs

This project is still *experimental*. If you experience any issues with it, 
please let me know by filing an [issue on GitHub](https://github.com/opi/psdtxtractor/issues)
and attach your PSD file.
