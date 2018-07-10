# -*- coding: utf-8 -*-

"""
Pug Extended Changelog
"""

import webbrowser
import sublime
import sublime_plugin

STYLES = '''
.mdpopups {
  {{'.background'|css}}
}
.pug-config-changes ul li, .pug-config-changes p {
  {{'.foreground'|css}}
}
.pug-config-changes a {
  text-decoration: none;
  color: #6D88FF;
}
.pug-config-changes h1,
.pug-config-changes h2,
.pug-config-changes h3,
.pug-config-changes h4,
.pug-config-changes h5,
.pug-config-changes h6 {
  {{'.string'|css('color')}}
}
.pug-config-changes h1,
.pug-config-changes h2 {
  margin-top: 50px;
}
.pug-config-changes h3,
.pug-config-changes h4 {
  margin-top: 30px;
}
'''

class PugChangesCommand(sublime_plugin.WindowCommand):
    def on_navigate(self, href):
        webbrowser.open_new_tab(href)
    
    def run(self):
        import mdpopups
        text = sublime.load_resource('Packages/Pug Extended/CHANGELOG.md')
        view = self.window.new_file()
        view.set_name('Pug Extended Changelog')
        view.settings().set('gutter', False)
        html = '<div class="pug-config-changes">%s</div>' % mdpopups.md2html(view, text)
        mdpopups.add_phantom(view, 'changelog', sublime.Region(0), html, sublime.LAYOUT_INLINE, css=STYLES, on_navigate=self.on_navigate)
        view.set_read_only(True)
        view.set_scratch(True)
    
    def is_enabled(self):
        try:
            import mdpopups
        except Exception:
            return False

        return (mdpopups.version() >= (1, 9, 0)) and (int(sublime.version()) >= 3119)
    
    is_visible = is_enabled