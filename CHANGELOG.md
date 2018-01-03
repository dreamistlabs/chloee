# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Changed: When returning an RGB value, the result will include the 'rgb' prefix and surrounding parentheses. For example, HEX code #C470EE will return rgb(196,112,238) instead of just 196,112,238.

## 0.0.1 - 2017-12-31
### Pre-Release
- Feature: Given a HEX code, return the corresponding RGB value. Or, vice versa, given an RGB value, return the corresponding HEX code.