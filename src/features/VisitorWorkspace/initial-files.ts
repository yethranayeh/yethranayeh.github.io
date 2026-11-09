export const initialFiles = {
  "README.txt": `Welcome to your visitor workspace.

Terminal and My Computer share these virtual files at /home/guest.
Create files with shell commands, or use Terminal's File > Upload file.
Double-click a text file in My Computer to edit it, or run open <file>.
Zinn is installed as the zinn command. Type zinn --help to begin. Try zinn task list PLAY to see the sample board.

Files are saved in this browser profile. Browser data can be cleared or
evicted, so use Export files in My Computer to keep a ZIP copy.
Reset files restores these initial documents and removes your visitor files.
Zinn's board has its own export and reset commands.

Portfolio source is a separate read-only view. This workspace has no
connection to the owner's computer, private files, or task database.
`,
  "local-server-troubleshooting.txt": `LOCAL SERVER TROUBLESHOOTING

A quick reference for macOS. Run these commands in your own Terminal.
The portfolio's browser shell cannot inspect your computer's processes.
Replace 5173 with your port and 12345 with the PID you find.

1. Find the process listening on a port
   lsof -nP -iTCP:5173 -sTCP:LISTEN

2. Inspect that process and its parent
   ps -p 12345 -o pid,ppid,command

3. Find its working directory to identify the project
   lsof -a -p 12345 -d cwd

4. Look for related processes by command line
   pgrep -fl 'vite|node|npm'

5. Check the HTTP response
   curl -i http://localhost:5173/

If nothing local explains the port, check Docker/container port mappings,
virtual machines, and SSH tunnels or editor port forwarding. The listening
process may be a proxy. Follow the forwarded port to the process and project
inside that environment. Permissions may limit which processes you can see.
`,
};
