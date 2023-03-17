
# Clean the build directory
clean::
	@mkdir -p build
	@rm -rf build/*

# Make docx beacon file
docx::
	@$(MAKE) clean
	@python docx.py

# Make html beacon file
html::
	@$(MAKE) clean
	@python html.py
