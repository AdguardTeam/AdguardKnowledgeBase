# v2.0.7
## 11/17/2016

1. [](#improved)
    * Added method to set all data in a form
    * Added params to form action URL
    * Added ability to add ids to buttons and to set them disabled 
1. [](#bugfix)
    * Moved Files Upload GC logic to function in front-end only

# v2.0.6
## 10/19/2016

1. [](#bugfix)
    * Fixed translations for `display` field
    * Fixed [#95](https://github.com/getgrav/grav-plugin-form/issues/95) multilanguage forms submission
    * Fixed duplicate textarea class tag [#98](https://github.com/getgrav/grav-plugin-form/issues/98)

# v2.0.5
## 09/15/2016

1. [](#bugfix)
    * Fix passing updating the header through event, no need for return value

# v2.0.4
## 09/15/2016

1. [](#improved)
    * Allow filling the page header form dynamically (e.g. use case: Comments plugin)

# v2.0.3
## 09/12/2016

1. [](#improved)
    * Use `Page::slug()` for form name if not set in the form itself (better backwards compatibility)

# v2.0.2
## 09/08/2016

1. [](#improved)
    * Added support for Grav's autoescape twig setting
    * Allow to add additional markup fields in form and field twig overrides
    * Updated the french language translation

# v2.0.1
## 09/07/2016

1. [](#bugfix)
    * Fixed a backwards compatibility issue with Admin forms

# v2.0.0
## 09/07/2016

1. [](#new)
    * Forms now supports multiple forms per page!
    * Access forms from any other page within the current page
    * Instantiate forms directly in page content with Twig processing enabled
    * New Twig function to get forms data from any other page
    * Ability to use Twig in saved filename
    * Reworked the `file` field. All files get uploaded via Ajax and are stored upon Submit. Fully backward compatible, `file` field now includes also a `limit` and `filesize` option. The former determines how many files are allowed to be uploaded when in combination with `multiple: true` (default: 10), the latter determines the file size limit (in MB) allowed for each file (default: 5MB)
1. [](#improved)
    * Added several missing HTML5 form input field types [#87](https://github.com/getgrav/grav-plugin-form/issues/87)
    * Added Support for CSS id in form definition

# v1.3.2
## 08/10/2016

1. [](#improved)
    * Added Romanian translation
1. [](#bugfix)
    * Fixed an issue with Recaptcha secret throwing errors [#84](https://github.com/getgrav/grav-plugin-form/pull/84)

# v1.3.1
## 07/27/2016

1. [](#improved)
    * Added support for multiple emails in `email` field (add `multiple: true` to enable)
1. [](#bugfix)
    * Fixed backward incompatibility with forms submission and data retrieval [getgrav/grav#933](https://github.com/getgrav/grav/issues/933)

# v1.3.0
## 07/14/2016

1. [](#improved)
    * When uploading a file through a form, if the file is already existing prepend the current day and time to the filename instead of overwriting it.

# v1.3.0-rc.4
## 06/21/2016

1. [](#bugfix)
    * Fixed running on Grav 1.0.x

# v1.3.0-rc.3
## 06/17/2016

1. [](#new)
    * Set hints for checkboxes options and allow field descriptions

# v1.3.0-rc.2
## 06/08/2016

1. [](#new)
    * Allow to process Twig in a hidden field, by setting `evaluate: true`

# v1.3.0-rc.1
## 06/01/2016

1. [](#improved)
    * French updated

# v1.3.0-beta.6
## 05/23/2016

1. [](#new)
    * Added support for advanced blueprint functionality in forms
    * Added site-wide form options to set Google Captcha site + secret keys [#34](https://github.com/getgrav/grav-plugin-form/pull/34)
    * Session-based 'flash' storage of form for redirects [#48](https://github.com/getgrav/grav-plugin-form/issues/48)
    * Added ability to **append** to file if you include a `process: save: body:` template attribute [#65](https://github.com/getgrav/grav-plugin-form/issues/65)
1. [](#improved)
    * Support `keyname` form format like admin forms
    * Added backwards compatibility for Captcha field
    * Added 'markdown-notices' style output for better errors
    * Added `Forms::getValue()` method to retrieve values programatically
    * Changed `datetime` form field to simply extend `text` until implemented
    * Updated french language
1. [](#bugfix)
    * Refactored the files upload logic
    * Missing Language string
    * Fixed errors not getting output

# v1.3.0-beta.5
## 05/12/2016

1. [](#improved)
    * Moved form/field.html.twig file to the default folder, to be more easily extended in themes

# v1.3.0-beta.4
## 05/04/2016

1. [](#new)
    * Added support for `prepend` and `append` field attributes for Text input

# v1.3.0-beta.3
## 05/03/2016

1. [](#bugfix)
    * Fix for select field admin translation

# v1.3.0-beta.2
## 04/27/2016

1. [](#bugfix)
    * Fix for autoescape in spacer and display form fields
    * Fix issue with form reset action [#66](https://github.com/getgrav/grav-plugin-form/pull/66)

# v1.3.0-beta.1
## 04/20/2016

1. [](#new)
    * Added the HTML5 `range` input field with `min` and `max` parameters
1. [](#improved)
    * Allow to override classes in Form definition for the form element
    * Add more blocks in the Form twig template, so classes can be overridden more easily in themes
    * Reworked some fields to fit the new Admin
    * Use `scope` for form fields to allow fields to be excluded from the data by adding `input@: false` to their definition
    * Added german translation
    * Allow to add inline Twig to the form message definition
1. [](#bugfix)
    * Fixed the form action URL for home page forms
    * Fix stopping form events propagation, correctly stop when one event is stopped
    * Allow to translate the fields placeholders and the form message
    * Fix captcha javascript function ordering. Also, render it in the site active language
    * Support attribute `for="id"` on label for checkbox
    * Fix select fields with the multiple option enabled
    * Fixed select options escaping with autoescape on - [#502](https://github.com/getgrav/grav-plugin-admin/issues/502)

# v1.2.2
## 02/11/2016

1. [](#bugfix)
    * Fixed case issue when including form file.

# v1.2.1
## 02/11/2016

1. [](#new)
    * Allow placeholder for **select** field
1. [](#improved)
    * Use common language strings in blueprints
    * Use `for` attribute in labels
    * Improved `README.md`
    * Code lint
1. [](#bugfix)
    * Moved `nl2br` to correct place or will break for arrays

# v1.2.0
## 01/06/2016

1. [](#bugfix)
    * Correctly merge the file field configuration
    * restore full file information save

# v1.1.0
## 12/18/2015

1. [](#new)
    * Croatian translation
    * Added id, style, and disabled options to select fields
1. [](#improved)
    * Allow adding form labels and help text as lang strings
    * Allow translating field content
    * Allow translating button and checkbox labels
    * Allow adding classes to the form field container with `field.outerclasses`
    * Updated French translation
1. [](#bugfix)
    * Fixed error message on file upload
    * Fixed overriding defaults for the file type in forms

# v1.0.3
## 12/11/2015

1. [](#improved)
    * Updated languages
    * Allow an action to stop processing
1. [](#bugfix)
    * Fix captcha validation
    * Fix issue where Form was unsetting valid page

# v1.0.2
## 12/01/2015

1. [](#bugfix)
    * Fixed merge of defaults settings
    * Support for arrays in `data.txt.twig`
    * Fixed blueprint for admin

# v1.0.1
## 12/01/2015

1. [](#new)
    * New **file upload** field
    * Added modular form template
    * Spanish translation
    * Hungarian translation
    * Italian translation

# v1.0.0
## 11/21/2015

1. [](#new)
    * Server-side validation of forms #11
    * Added french translation
    * Added **nonce** form security
1. [](#improved)
    * Show a more meaningful error when the display page is not found
    * Added links to learn site for form examples
    * Label can be omitted
    * Allow user to set the CSS class for buttons
1. [](#bugfix)
    * Fixed multi-language forms
    * Checkbox is translatable
    * Minor fixes

# v0.6.0
## 10/21/2015

1. [](#bugfix)
    * Fixed for missing attributes in textarea field
    * Fixed checkbox inputs

# v0.5.0
## 10/15/2015

1. [](#new)
    * New `operation` param to allow different file saving strategies
    * Ability to add new file saving strategies
    * Now calls a `process()` method during form processing
1. [](#improved)
    * Added server-side captcha validation and removed front-end validation
    * Allow `filename` instead of `prefix`, `format` + `extension`
1. [](#bugfix)
    * Fixed radio inputs

# v0.4.0
## 9/16/2015

1. [](#new)
    * PHP server-side form validation
    * Added new Google Catpcha field with front-end validation
1. [](#improved)
    * Add defaults for forms, moved from the themes to the Form plugin
    * Store multi-line fields with line endings converted to HTML

# v0.3.0
## 9/11/2015

1. [](#improved)
    * Refactored all the forms fields

# v0.2.1
## 08/24/2015

1. [](#improved)
    * Translated tooltips

# v0.2.0
## 08/11/2015

1. [](#improved)
    * Disable `enable` in admin

# v0.1.0
## 08/04/2015

1. [](#new)
    * ChangeLog started...
