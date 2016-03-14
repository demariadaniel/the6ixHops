#!/bin/bash
open -a "Sublime Text 2"

node api/server.js

/usr/bin/open -a "/Applications/Firefox.app" 'http://localhost/'

