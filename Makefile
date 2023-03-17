url := "http://localhost:3000/cat.jpg"

# Clean the build directory
clean::
	@mkdir -p build
	@rm -rf build/*

# Make beacon docx file
docx::
	@$(MAKE) clean
	@python docx.py
