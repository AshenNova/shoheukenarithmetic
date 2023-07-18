export const displayContent = (level) => {
  //   let html = undefined;

  if (level == "heuFourb") {
    return `
    </p>
    1. Lowest Common Multiples ( Indirect )</p>
    2. Highest Common Factor ( Indirect )</p>
    3. Unchanged Difference</p>
    4. Unchanged Total</p>
    5. Simultaneous Equation</p>
    6. Internal Transfer: Double Effect</p>
    <hr>
    9. All`;
  }

  if (level == "heuSix") {
    return `
    </p>
    1. Lowest Common Time</p>
    2. Cycle</p>
    3. Repeated Identity Type 3</p>
    4. Snake and Ladder</p>
    <hr>
    9. All
    `;
  }

  if (level == "heuSixb") {
    return `
    </p>
    1. Identical Quantity with difference (Type 3)</p>
    2. More Than / Less Than</p>
    3. Using it all</p>
    4. Identical Quantity with difference (Level 2) Type 1 Multiples</p>
    5. Identical Quantity with difference (Level 2) Type 1 Difference</p>
    6. Identical Quantity with difference (Level 2) Type 2</p>
    <hr>
    9. All
    `;
  }

  if (level == "calThree") {
    return `
    </p>
    1. Addition (to - 10 000) No carry</p>
    2. Subtraction (to - 10 000) No borrowing</p>
    3. Addition (to - 10 000) (Carrying)</p>
    4. Subtraction (to - 10 000) (Borrowing)</p>
    5. Single blank</p>
    6. Working (Other sequence)</p>
    7. Arithmetic Constant</p>
    8. Arithmetic Stagger</p>
    9. Working: Multiplication</p>
    10. Overlapping Place Value</p>
    11. Working: Long Division ( No remainder )</p>
    12. Working: Long Division ( Remainder )</p>
    13. Working: Multiplication ( Single Blank )</p>
    14. Multiplication in sets</p>
    15. Long Division: Simple Statement</p>
    16. Left Side Right Side + - x ÷</p>
    17. Multiplication and Division of Convenient Numbers</p>
    18. Parts and Intervals</p>
    19. Time: Timeline ( hours and mins )</p>
    20. Fractions: Addition and Subtraction</p>
    21. Fractions: Expansion and simplification</p>
    <hr></hr>
    99. All`;
  }
  if (level == "calFour") {
    return `
      </p>
      1. Common Multiples</p>
      2. Listing Factors</p>
      3. Common Factors</p>
      4. Double Digit Multiplication</p>
      5. Left Side Right Side + - x /</p>
      6. Fractions: Addition: Mixed Fractions</p>
      7. Fractions: Subtraction: Mixed Fractions</p>
      8. Decimals: Addition</p>
      9. Decimals: Subtraction</p>
      10. Decimals: Overlapping Place Value</p>
      11. Decimals: Multiplication (Single)</p>
      12. Decimals: Multiplication (Double)</p>
      13. Decimals: Division </p>
      14. Fractions to Decimal (Limit)</p>
      15. Decimals: Division and Multiplication with splitting</p>
      16. Multiplication in Sets</p>
      17. Fractions: Unit with a Value
      <hr></hr>
      99. All
      `;
  }
  if (level == "calFive")
    return `
      </p>
      0. Order of Operation</p>
      <hr></hr>
      1. Fractions: Multiplication of Fractions</p>
      2. Fractions: Mixed Fraction Multiplication</p>
      3. Fractions: Conversion</p>
      4. Fractions: Remainder Concept</p>
      5. Fractions: Identical Numerator</p>
      6. Fractions: Unlike Fraction with Permission</p>
      7. Fractions: Identical Numerator (Type 2)</p>
      8. Fractions: Before and after like fractions</p>
      <hr></hr>
      9. Geometry: Area of Triangle</p>
      10. Geometry: Area of Figure: Using 2 different Units</p>
      <hr></hr>
      11. Volume: Dimensions and Surface Area</p>
      12. Volume: Numerator with a Value</p>
      <hr></hr>
      13. Ratio: Repeated Identity</p>
      14. Ratio: Repeated Group</p>
      15. Ratio: Identical Total</p>
      16. Ratio: Unchanged Object</p>
      17. Ratio: Unchanged Total</p>
      18. Ratio: Unchanged Difference</p>
      19. Ratio: Manipulation in units</p>
      20. Ratio: Repeated Identity (Geometry)</p>
      21. Ratio: Wipe on wipe off</p>
      <hr></hr>
      22. Rates: Part thereof part thereafter</p>
      23. Rates: Taps</p>
      <hr></hr>
      24. Percentage: Percentage of</p>
      25. Percentage: Perchange change</p>
      26. Percentage: Repeated Identity</p>
      27. Percentage: Repeated Group</p>
      28. Percentage: Remainder Concept</p>
      29. Percentage: Simple and Further discount</p>
      30. Percentage: GST, discount and Service Charge</p>
      31. Percentage: Identical Effect</br>
      <hr></hr>
      32. Average: Internal change</p>
      33. Average: External Change</p>
      34. Average: Odd consecutive days</p>
      35. Average: Triangle Numbers</p>
      <hr></hr>
      </p>99. All
      
      `;

  if (level == "calSix") {
    return `
    </p>
    1. Fractions: Finding remainder</p>
    2. Circles: Area and Perimeter</p>
    3. Circles: Inner Square</br>
    <hr>
    4. Speed: Average Speed</p>
    5. Speed: Moving Apart</p>
    6. Pie Chart</br>
    <hr>
    99. All
    `;
  }
  if (level == "calSixb") {
    return `
    </p>
    1. Speed: Meet up</p>
    2. Speed: Catch up</p>
    3. Speed: Double Triangle</p>
    4. Volume: Grouping</p>
    5. Volume: Meet Up</p>
    6. Geometry: Repeated Identity Area
    <hr>
    99. All`;
  }
};
