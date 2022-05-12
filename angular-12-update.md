# Angular - 12
# list of upates
- moving closer to Ivy Everywhere(View Engine).
- The Future of Protractor.
- Nullish Coalescing.
- Learning Angular.
- Stylish Improvements.
- Deprecating support for IE11.
- some more minor changes.


# Moving Closer to Ivy everywhere (view engine).
- now that view engine is deprecated, it will be removed in a future major release.
- view engine is responsible for compailing the component.
- But now view engine is replaced with Ivy everywhere.

# Nullish Coalescing.
- the nullish coaalescing operator (??) has been helping developers write cleaner code

{{ age !== null && age !== undefined ? age : calculateAge()

// this is replaced with

{{ age ?? calculatedAge() }}


Thursday 12 May 2022 12:15:29 PM 


# Future of Protractor.

- protractor is an end-to-end testing framework for angular
- we are currently reviewing the feedback for the protractor and decide that they will continue with protractor or without protractor.


# Style Improvements.

- Angular components will now support inline sass in the styles.
- previously, sass was only available in external resources due to the angular compiler.
- Angular 12 is also supporting tailwindcss.

# transitioning from legacy i18n message IDs.
- currently, there are multiple legacy message id formats being used in our i18n system.

- these legacy message-ids are fragile as problems can arise based on whitespace.
the new canonical message id formate is much more relable and bug free.

# learning Angular.
- Angular has made some changes to the documentation for better learning of angular.
- they added content projection guide, with more new content in the works.


