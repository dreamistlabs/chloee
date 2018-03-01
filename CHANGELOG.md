# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [TODO]
- Allow users to enter HEX values with the leading #-sign (e.g., #c470ee).
- Allow users to enter RGB values with the rgb() format (e.g., rgb(196,112,238)).

## [Unreleased]
- Changed: When returning an RGB value, the result will include the 'rgb' prefix and surrounding parentheses. For example, HEX code #C470EE will return rgb(196,112,238) instead of just 196,112,238.

## 1.0.1 - 2018-xx-xx
### Changed
- Moved away from using browserify for building production files in favor of webpack.

## 1.0.0 - 2018-01-07
### Initial Release
- Added: A demo page that users can use to convert hex/rgb values using Chloee.

## 0.0.1 - 2017-12-31
### Pre-Release
- Feature: Given a HEX code, return the corresponding RGB value. Or, vice versa, given an RGB value, return the corresponding HEX code.