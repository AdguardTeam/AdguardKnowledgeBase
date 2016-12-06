# v1.9.3
## 10/19/2016

1. [](#bugfix)
    * Fixed an issue with invalid syntax in `route: @self` logic

# v1.9.2
## 09/19/2016

1. [](#bugfix)
    * Reverted change in events - causing problems
    * Reverted fix for `route: @self`, breaking `filter: @self` (used in getgrav.org)

# v1.9.1
## 09/08/2016

1. [](#bugfix)
    * Fixed logic to use `onPageInitialized` event

# v1.9.0
## 09/06/2016

1. [](#new)
    * Multiple search boxes support [#52](https://github.com/getgrav/grav-plugin-simplesearch/pull/52)
    * Added Croatian and Russian translation
1. [](#improved)
    * Added support for Grav's autoescape twig setting
1. [](#bugfix)
    * Fix searching on `@self   `[#53](https://github.com/getgrav/grav-plugin-simplesearch/pull/53)

# v1.8.0
## 07/14/2016

1. [](#new)
    * Added dutch and romanian
1. [](#bugfix)
    * Fix translating the search input placeholder

# v1.7.1
## 05/03/2016

1. [](#new)
    * Added configurable `min length` option for how many characters needed before you can search

# v1.7.0
## 04/30/2016

1. [](#new)
    * Added support for taxonomy searching in regular searches (not just on-page searches as was the case previously)
    * Added support for `route: '@self'` to use the route of the current page without specifying it.
    * Added display search button option - #33
    * Refactored code for clarity

# v1.6.2
## 01/06/2016

1. [](#improved)
    * Improved the README instructions on how to save all pages

# v1.6.1
## 11/11/2015

1. [](#improved)
    * Strip HTML tags from title and content before searching

# v1.6.0
## 11/11/2015

1. [](#new)
    * Removing `filter:` from configuration will search **ALL** pages

# v1.5.1
## 10/15/2015

1. [](#improved)
    * Minor performance fix
    * Updated README.md with more help
1. [](#bugfix)
    * Fix for special character searches

# v1.5.0
## 10/07/2015

1. [](#new)
    * Allow simplesearch to work with on-page collections

# v1.4.1
## 08/31/2015

1. [](#improved)
    * Fixed some blueprint issues

# v1.4.0
## 08/25/2015

1. [](#improved)
    * Added blueprints for Grav Admin plugin
    * Added results sorting

# v1.3.0
## 07/21/2015

1. [](#new)
    * Added support for modular pages in results

# v1.2.7
## 07/17/2015

1. [](#bugfix)
    * Fixed "Undefined index: extension" error

# v1.2.6
## 07/14/2015

1. [](#bugfix)
    * Fixed URL issue that showed up with multi-languages

# v1.2.5
## 04/24/2015

1. [](#bugfix)
    * Fixed issue with broken image

# v1.2.4
## 02/19/2015

2. [](#improved)
    * Implemented new `param_sep` variable from Grav 0.9.18

# v1.2.3
## 01/06/2015

1. [](#improved)
    * Improved `README.md` file with more information

# v1.2.2
## 12/21/2014

1. [](#bugfix)
    * Fix for invalid base_url in some instances

# v1.2.1
## 11/30/2014

1. [](#new)
    * ChangeLog started...
