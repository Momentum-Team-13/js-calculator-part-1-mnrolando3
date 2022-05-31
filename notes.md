Three pages - HTML, CSS, and JS

Calculator
- 5x4 grid?
- Fixed flex box

Different properties for numbers/operations, just in case

(Sketched in notebook)


Math works using eval
Next steps:
Change clear variable - N/A
Add clear into loop - DONE
Fix result box to round or wrap so all digits can be seen (fits 11 characters) - DONE - still would like to practice getting smaller to fit more digits
Update eval to math.eval? - DONE
- Add parenthesis, percent, and exponent options - DONE

Include 0 on leading decimal?
Show error with invalid entry? / Disallow invalid entry?

Assignment: Build a calculator that evaluates basic math.
Approach: I designed my calculator with common operations, as well as more advanced operations such as exponents, modulo, and parenthesis. The HTML was linked to a math library, which allowed me to use math.eval in my Java Script. 
Each button on the calculator was given the class with "key," then a respective secondary class of "number" or "operation" to allow for further specificity if needed. The calculator was based in flexbox CSS and was sized in pixels, however the individual buttons (keys) are percentages in order to maintain their relative size if the size of the outer box were to change. The result box is aligned and justified to the end (right), replicating a traditional calculator. 
There is no limit to the characters that can be entered in the calculator result box, however characters the beginning will overflow and not be visible if text content string exceeds 11 characters. To allow the user to still see an accurate result of their calculation, the string will reduce to 8 significant figures if the evaluated text content string is greater than or equal to 11 characters.
