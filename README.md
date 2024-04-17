## Use Dependency Visualization Tools

The error "dot is not recognized as an internal or external command" typically occurs when the Graphviz command-line tools, including `dot`, are not installed or not available in your system's PATH. Graphviz is a prerequisite for generating SVG files from DOT files, which are used to represent dependency graphs.

To resolve this issue, you need to install Graphviz on your system and ensure that the Graphviz binaries directory is included in your system's PATH environment variable.

Here's how you can do it:

1. **Install Graphviz**: Download and install Graphviz from the [official website](https://www.graphviz.org/download/).

2. **Add Graphviz to PATH**:
   - On Windows:
     - During the installation process, make sure to select the option to add Graphviz to your system's PATH.
     - If you've already installed Graphviz without adding it to PATH, you can manually add the Graphviz binaries directory to your system's PATH. Typically, this directory is something like `C:\Program Files\Graphviz\bin`.
     - After adding Graphviz to PATH, you may need to restart your command prompt or terminal for the changes to take effect.

   - On macOS and Linux:
     - Graphviz binaries are usually added to the system PATH automatically during installation. If not, you can add them manually by modifying your shell configuration file (e.g., `.bashrc`, `.bash_profile`, `.zshrc`, etc.) to include the Graphviz binaries directory in the PATH.
     - For example, you can add the following line to your `.bashrc` or `.bash_profile` file:
       ```bash
       export PATH="/usr/local/bin:/opt/local/bin:$PATH"
       ```

3. **Retry the Command**: After installing Graphviz and updating your PATH, retry the command to generate the dependency graph. The command should now be able to locate the `dot` executable and generate the SVG file successfully.

Once you've completed these steps, you should be able to generate dependency graphs using Graphviz tools without encountering the "dot is not recognized" error.


4. **Run command**: pnpm run dependecy