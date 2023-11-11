function meeting(s) {
    //:PREP
    // P: string
    // R: string
    // E: "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)"
    // P: 1-make this string uppercase
        //2-give it sorted in alphabetical order by last name
        //3-When the last names are the same, sort them by first name.
        //4-Last name and first name of a guest come \
        //in the result between parentheses separated by a comma.
 return (s.replace(/;/gi, " ").split(" ").map(name => name.split(":").reverse().join(", ").toUpperCase()).sort()
            .map(fullname => `(${fullname})`).join(''))
}