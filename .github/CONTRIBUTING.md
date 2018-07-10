# Contributing to Pug Extended

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to [Pug Extended](https://www.github.com/thecodechef/sublime-pug-extended). These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Pug Extended](#pug-extended)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Documentation Styleguide](#documentation-styleguide)
    * [Yaml Styleguide](#yaml-styleguide)
    * [Python Styleguide](#python-styleguide)
  * [Git Commit Messages](#git-commit-messages)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [Pug Extended Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [cyberchefjay@gmail.com](mailto:cyberchefjay@gmail.com).

## What should I know before I get started?

### Pug Extended

[Pug Extended](https://github.com/thecodechef/sublime-pug-extended).

Pug Extended is intentionally very modular.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Pug Extended. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Aatom)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started Atom, e.g. which command exactly you used in the terminal, or how you started Atom otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an Atom command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that Pug Extended crashed**, include a crash report with a stack trace from the Console from Sublime Text.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of Sublime Text) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of Sublime Text?** What's the most recent version in which the problem doesn't happen? You can download older versions of Atom from [the releases page](https://github.com/atom/atom/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **Which version of Sublime Text are you using?** You can get the exact version by running `subl -v` in your terminal, or by starting Atom and running the `Help > About Sublime Text` option from the Help Menu.
* **What's the name and version of the OS you're using**?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Atom, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/).

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful**.
* **Specify which version of Sublime you're using.** You can get the exact version by running `subl -v` in your terminal, or by starting Sublime Text and running the `Help > About Sublime Text` from the Help menu.
* **Specify the name and version of the OS you're using.**

### Pull Requests

#### Bug Fixes
  * Fill in [the required template](PULL_REQUEST_TEMPLATE/Bug Fix.md)
  * Include screenshots and animated GIFs in your pull request whenever possible.
  * Document new code based on the [Documentation Styleguide](#documentation-styleguide)
  * End all files with a newline
  * Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Sublime Text (such as `Package Control`)

#### Feature Request
  * Fill in [the required template](PULL_REQUEST_TEMPLATE/Feature Request.md)
  * Include screenshots and animated GIFs in your pull request whenever possible.
  * Document new code based on the [Documentation Styleguide](#documentation-styleguide)
  * End all files with a newline
  * Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Sublime Text (such as `Package Control`)

## Styleguides

### Documentation Styleguide

#### Yaml Documentation Styleguide
#### Python Documentation Styleguide

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on macOS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all Atom repositories, but some are specific to `atom/atom`.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `atom/atom` and all Atom-owned packages which are labeled as bugs, but still need to be reliably reproduced](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3Aatom+label%3Abug+label%3Aneeds-reproduction) or perhaps [open pull requests in `atom/atom` which haven't been reviewed yet](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+repo%3Aatom%2Fatom+comments%3A0). To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `atom/atom` only and also across all Atom repositories. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on `atom/atom` if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on that repository.

#### Type of Issue and Issue State

| Label name | `thecodechef/sublime-pug-extended` :mag_right: | Description |
| --- | --- | --- | --- |
| `enhancement` | [search][search-pug-feature-requests]| Feature requests. |
| `bug` | [search][search-pug-bug-reports]| Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-pug-questions]| Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-pug-feedback]| General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-pug-help-wanted]| We would appreciate help from the community in resolving these issues. |
| `beginner` | [search][search-pug-beginner]| Less complex issues which would be good first issues to work on for users who want to contribute to Pug Extended. |
| `more-information-needed` | [search][search-pug-more-info-needed]| More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-pug-needs-reproduction]| Likely bugs, but haven't been reliably reproduced. |
| `blocked` | [search][search-pug-blocked]| Issues blocked on other issues. |
| `duplicate` | [search][search-pug-dublicate]| Duplicate of another Issue. |
| `wontfix` | [search][search-pug-wontfix]| Not worth fixing right now. |
| `invalid` | [search][search-pug-invalid]| Issues which aren't valid (e.g. user errors). |
#### `thecodechef/sublime-pug-extended` Topic Categories

| Label name | `thecodechef/sublime-pug-extended` :mag_right: | Description |
| --- | --- | --- |
| `syntax-error` | [search][search-pug-syntax-errors]| Syntax Specific Build Errors |
| `completion-error` | [search][search-pug-completion-errors]| Completion Specific Build Errors |
| `command-error` | [search][search-pug-command-errors]| Command Specific Build Errors |
| `build-error` | [search][search-pug-build-errors]| Build Specific Build Errors |
| `prefs-error` | [search][search-pug-prefs-errors]| Preference Specific Build Errors |
| `menus-error` | [search][search-pug-menus-errors]| Menu Specific Build Errors |

#### Pull Request Labels

| Label name | `thecodechef/sublime-pug-extended` :mag_right: | Description
| --- | --- | --- |
| `work-in-progress` | [search][search-pug-pr-wip]| Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-pug-pr-needs-review]| Pull requests which need code review, and approval from maintainers or Pug Extended team. |
| `under-review` | [search][search-pug-pr-under-review]| Pull requests being reviewed by maintainers or Pug Extended team. |
| `requires-changes` | [search][search-pug-pr-requires-changes]| Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-pug-pr-needs-testing]| Pull requests which need manual testing. |

***
<!-- Types of Issues -->

[search-pug-feature-requests]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Aenhancement)
[searcg-pug-bug-reports]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-questions]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-feedback]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-help-wanted]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-beginner]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-more-info-needed]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-needs-reproduction]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-blocked]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-duplicate]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-wontfix]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)
[searcg-pug-invalid]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abug)

<!-- Types of Specific Issues -->

[search-pug-syntax-errors]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Asyntax-error)
[search-pug-completion-errors]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Acompletion-error)
[search-pug-command-errors]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Acommand-error)
[search-pug-build-errors]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Abuild-error)
[search-pug-prefs-errors]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Apref-error)
[search-pug-menus-errors]: (https://www.github.com/search?q=+is%3Aopen+is%3Aissue+repo%3Athecodechef%3Fsublime-pug-extended+label%3Amenu-error)

<!-- Types of Pull Requests -->

[search-pug-pr-wip]: (https://www.github.com/search?q=+is%3Aopen+is%3Apr+repo%3Athecodechef%3Fsublime-pug-extended+label%3Awork-in-progress)
[search-pug-pr-needs-review]: (https://www.github.com/search?q=+is%3Aopen+is%3Apr+repo%3Athecodechef%3Fsublime-pug-extended+label%3Aneeds-review)
[search-pug-pr-under-review]: (https://www.github.com/search?q=+is%3Aopen+is%3Apr+repo%3Athecodechef%3Fsublime-pug-extended+label%3Aunder-review)
[search-pug-pr-requires-changes]: (https://www.github.com/search?q=+is%3Aopen+is%3Apr+repo%3Athecodechef%3Fsublime-pug-extended+label%3Arequires-changes)
[search-pug-pr-needs-testing]: (https://www.github.com/search?q=+is%3Aopen+is%3Apr+repo%3Athecodechef%3Fsublime-pug-extended+label%3Aneeds-testing)