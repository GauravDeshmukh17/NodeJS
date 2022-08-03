# Build WCAT Command

It is used to display or make a copy content of one or more files in the terminal

<h2>General Syntax : node wcat.js [options] [filepaths]</h2> 
<strong>option to remove big line break (-s) option to add line number to non empty lines (-b) option to add line numbers to all lines (-n)</strong>
<br>

<h3>Commands:</h3>

<strong>1) node wcat.js filepath => displays content of the file in the terminal ✔</strong>
<br>
<strong>2) node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order. ✅</strong>
<br>
<strong>3) node wcat.js -s filepath => convert big line breaks into a singular line break</strong>
<br>
<strong>4) node wcat.js -n filepath => give numbering to all the lines</strong>
<br>
<strong>5) node wcat.js -b filepath => give numbering to non-empty lines</strong>
<br>
<strong>6) node wcat.js -c filepath => creates the file</strong>
<br>
<strong>7) node wcat.js -d filepath => deletes the file</strong>
<br>
<br>
<strong>* We can mix and match the options.</strong>
<br>

<h3>Edge cases:</h3>

<strong>1) If file entered is not found then it gives file does not exist error. ✅</strong>
<br>
<strong>2) -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first entered option should work.</strong>
<br>
<strong>3) -s and any one or both from -n and -b is present then -s will be executed first and then -n and -b according second rule</strong>
<br>
<strong>4) If same file is created again then it says "file alraedy exist"</strong>
<br>
<strong>5) Only after creating file -s -n -b can be applied otherwise it gives error</strong>
<br>
<strong>6) If file is not created but deleted then it gives error as it is not possible</strong>
