# Grav LangSwitcher Plugin

![LangSwitcher](assets/readme_1.png)

`LangSwitcher` is a [Grav](http://github.com/getgrav/grav) plugin that provides native language text links to switch between [Multiple Languages](http://learn.getgrav.org/content/multi-language) in Grav **0.9.30** or greater.

# Installation

Installing the LangSwitcher plugin can be done in one of two ways. Our GPM (Grav Package Manager) installation method enables you to quickly and easily install the plugin with a simple terminal command, while the manual method enables you to do so via a zip file.

## GPM Installation (Preferred)

The simplest way to install this plugin is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install langswitcher

This will install the LangSwitcher plugin into your `/user/plugins` directory within Grav. Its files can be found under `/your/site/grav/user/plugins/langswitcher`.

## Manual Installation

To install this plugin, just download the zip version of this repository and unzip it under `/your/site/grav/user/plugins`. Then, rename the folder to `langswitcher`. You can find these files either on [GitHub](https://github.com/getgrav/grav-plugin-langswitcher) or via [GetGrav.org](http://getgrav.org/downloads/plugins#extras).

You should now have all the plugin files under

    /your/site/grav/user/plugins/langswitcher

# Usage

The `langswitcher` plugin doesn't require any configuration. You do however need to add the included Twig partials template into your own theme somewhere you want the available languages to be displayed.

```
{% include 'partials/langswitcher.html.twig' %}
```

Something you might want to do is to override the look and feel of the langswitcher, and with Grav it is super easy.

Copy the template file [langswitcher.html.twig](templates/partials/langswitcher.html.twig) into the `templates` folder of your custom theme:

```
/your/site/grav/user/themes/custom-theme/templates/partials/langswitcher.html.twig
```

You can now edit the override and tweak it however you prefer.

# Updating

As development for the LangSwitcher plugin continues, new versions may become available that add additional features and functionality, improve compatibility with newer Grav releases, and generally provide a better user experience. Updating LangSwitcher is easy, and can be done through Grav's GPM system, as well as manually.

## GPM Update (Preferred)

The simplest way to update this plugin is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm). You can do this with this by navigating to the root directory of your Grav install using your system's Terminal (also called command line) and typing the following:

    bin/gpm update langswitcher

This command will check your Grav install to see if your LangSwitcher plugin is due for an update. If a newer release is found, you will be asked whether or not you wish to update. To continue, type `y` and hit enter. The plugin will automatically update and clear Grav's cache.

> Note: Any changes you have made to any of the files listed under this directory will also be removed and replaced by the new set. Any files located elsewhere (for example a YAML settings file placed in `user/config/plugins`) will remain intact.

## Configuration

Simply copy the `user/plugins/langswitcher/langswitcher.yaml` into `user/config/plugins/langswitcher.yaml` and make your modifications.

```
enabled: true
built_in_css: true
```

Options are pretty self explanatory.

