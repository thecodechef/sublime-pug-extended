# -*- coding: utf-8 -*-

"""
Pug Extended Issues
"""
import webbrowser
import sublime
import sublime_plugin


class PugIssuesCommand(sublime_plugin.WindowCommand):
    def run(self):
        """Open the issues page in a browser tab"""
        webbrowser.open_new_tab('https://github.com/thecodechef/sublime-pug-extended/issues')
