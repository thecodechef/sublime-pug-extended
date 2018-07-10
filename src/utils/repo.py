# -*- coding: utf-8 -*-

"""
Pug Extended Repo
"""
import sublime
import sublime_plugin
import webbrowser

class PugRepoCommand(sublime_plugin.WindowCommand):
    def run(self):
        """Open the issues page in a browser tab"""
        webbrowser.open_new_tab('https://github.com/thecodechef/sublime-pug-extended')