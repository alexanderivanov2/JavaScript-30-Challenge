const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const inventorsBornIn1500 = inventors.filter(invenrtor => invenrtor.year > 1499 && invenrtor.year < 1600);
  console.log('Inventors born in the 1500s:');
  console.table(inventorsBornIn1500);
  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  console.log('Inventors by first and last name: ');
  const inventorsByFirstAndLastName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
//   inventorsByFirstAndLastName.forEach(inventor => console.log(inventor));
  console.table(inventorsByFirstAndLastName);
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  console.log('Investors sort by youngest to oldest: ');
  const investorsByYoungest = inventors.sort((a, b) => a.year - b.year);
  console.table(investorsByYoungest);
  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
    console.log('Reduce how many year did all the investors live all together: ');
    const totalYearLived = inventors.reduce((accumulator, inv) => accumulator + (inv.passed - inv.year), 0);
    console.log(totalYearLived);
  // 5. Sort the inventors by years lived
  console.log('Investors sort by years lived:');
  const sortByYearsLived = inventors.sort((a, b) => (b.passed - b.year) - (a.passed-a.year));
console.table(sortByYearsLived);


  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  const boulevards = [ "Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Malesherbes", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"];
    console.log('Boulevard with de in name');
    const BoulevardsWithDeInName = boulevards.filter(boulevard => boulevard.includes('de'));
    console.table(BoulevardsWithDeInName);


  // 7. sort Exercise
  // Sort the people alphabetically by last name
  console.log('Sort People by last name: ');
  const sortedPeopleByLastName = people.sort((a, b) => getLastName(a).localeCompare(getLastName(b)));
  
  function getLastName(str) {
    const lastName = str.split(',')[0];
    return lastName;
  }
  console.table(sortedPeopleByLastName);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  const cars = data.reduce((acc, value) => {
    if(value == 'car') {
        return acc + 1;
    }
    return acc + 0;
    }, 0);

    const truck = data.reduce((acc, value) => {
        if (value == 'truck') {
            return acc + 1;
        }
        return acc + 0; 
    }, 0);

    const bike = data.reduce((acc, value) => {
        if (value == 'bike') {
            return acc + 1;
        }
        return acc + 0;
    }, 0);

    const walk = data.reduce((acc, value) => {
        if (value == 'bike') {
            return acc + 1;
        }
        return acc;
    }, 0);

    const van = data.reduce((acc, value) => {
        if (value == 'van') {
            return acc + 1;
        }
        return acc;
    }, 0)

const result = {
    cars,
    truck,
    bike,
    walk,
    van
}

console.table(result);
