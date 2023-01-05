// routes/docsfolder/docshome.tsx

import { Head } from "$fresh/runtime.ts";
import CopyArea from "../../islands/CopyArea.tsx";
import {
  Footer,
  GettingStarted,
  Header,
  Home,
  NavBar,
  WelcomeArea,
} from "../index.tsx";

export default function DocsHome() {
  return (
    <div style="background-color: #f8d3cd" class="flex-col items-center">
      <Head>
        <title>Ponder Docs Home</title>
      </Head>
      <NavBar />
      <Header />

      <DocsWelcome />

      <DocsTableOfContents />

      <IntroDoc />
      <GettingStartedDoc />
      <ConnectingYourDB />
      <BasicCRUD />
      <ManagingTables />
      <DatabaseIntrospection />
      <AssociationsDoc />
      <CLI />
      <ContributionAndBugs />
      <AboutDoc />
      <Footer />
    </div>
  );
}

//components definitions:

export function DocsWelcome() {
  return (
    <div
      style="background-color: #fbd6c8"
      class="flex flex-row items-center justify-center p-4 mx-auto gap-4"
    >
      <img
        id="mainLogoTop"
        src="/ponder1.png"
        class="w-40 h-40"
        alt="the Ponder logo: the Deno dinosaur pondering in front of two databases"
      />
      <h2 class="py-2 text(4xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold shrink">
        Welcome to the <span class="text-purple-600">documentation</span>{" "}
        for Ponder. Click on any section to jump to the{" "}
        <span class="text-purple-600">documentation</span>.
      </h2>
    </div>
  );
}

export function DocsTableOfContents() {
  const tableOfDocs = [
    { name: "Intro", href: "#introDoc" },
    { name: "Getting Started", href: "#gettingStarted" },    
    { name: "Connecting Your Database", href: "#connectingDB" },
    { name: "Basic CRUD", href: "#basicCRUD" },
    { name: "Managing Tables", href: "#managingTables" },
    { name: "Database Introspection", href: "#databaseIntrospection" },
    { name: "Associations", href: "#associationsDoc" },
    { name: "CLI", href: "#CLI" },
    { name: "Making Contribution, Finding Bugs", href: "#contributeBugs" },
    { name: "About", href: "#aboutDoc" },
  ];
  const menus = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docsfolder/docshome" },
    { name: "GitHub", href: "https://github.com/oslabs-beta/Ponder" },
    { name: "Deno Module", href: "https://deno.land/x/ponder/" },
  ];
  const docsMapped = tableOfDocs.map((el) => (
    <li class="list-decimal hover:text-purple-900 hover:bg-pink-200" >
      <a href={el.href}>{el.name}</a>
    </li>
  ));

  return (
    <section  class="m-12 fixed">
      <h3 id="tableOfContents" class="text-2xl"><a href="#mainLogoTop">Table Of Contents</a></h3>
      <ul class="list-inside">
        {docsMapped}
      </ul>
    </section>
  );
}

export function IntroDoc() {
  return (
    <section id="introDoc" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h1 class="text(3xl gray-600) font-bold">Intro</h1>
      <p>
      Ponder is an ORM for PostGres using the Deno runtime, eliminating the need for developers to spend valuable time writing complex SQL queries.

      <h3 class="text(xl gray-600) font-bold">Features</h3>
      -Basic CRUD functionality for interacting with your PostGRES Database<br></br>
      -Introspect database and modify database tables through models in accordance with principles of OOP<br></br>
      -Introspect your database for a visual representation of your tables

      <h3 class="text(xl gray-600) font-bold">How to add to your Project</h3>
      To use, please import the Ponder URI. You now have access to all the methods on the "ponder" object!
      <CopyArea>
      import * as ponder from "https://deno.land/x/ponder/";
      </CopyArea>
      </p>
      </section>
  );
}

export function GettingStartedDoc() {
  return (
    <div id="gettingStarted">
      <GettingStarted />
    </div>
  );
}



export function ConnectingYourDB() {
  const copy1 = "import { poolConnection } from'./deps.ts"
  return (
    <section id="connectingDB" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h1 class="text(3xl gray-600) font-bold">Connecting Your Database</h1>
      <p>
      Create a new instance of poolConnection passing in the database connection string. By default, the number of pool connections is set to three and lazy loading is enabled. Users may also specify the number of server connections and whether the loading type is lazy. 

      <CopyArea>
        {copy1}
      </CopyArea>
      With default three connections and lazy loading:
      <CopyArea>
      const ponder = new poolConnection('PG_URI') 
      </CopyArea>
      With five connections and lazy loading disabled:
      <CopyArea> 
      const ponder = new poolConnection('PG_URI', 5, false) 
      </CopyArea>
      </p>
      </section>
  );
}

export function BasicCRUD() {
  return (
    <section id="basicCRUD" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-600) font-bold">BasicCRUD</h2>

      <p>
        
      <h3 class="text(xl gray-600) font-bold">Find a Table</h3>
      <span class="font-semibold">findAllinOne</span>(table: string): returns all data from all rows of a table. Returns an array with an object containing all data on the 'people' table
      <CopyArea> 
      const data = await ponder.findAllinOne('people'); 
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Find a Column in a Table</h3>
      <span class="font-semibold">findColumn</span>(column: string, table: string): returns a specific column from a specified table. Stores values from age column from the people table in the const data:
      <CopyArea> 
      const data = await ponder.findColumn('age', 'people');  
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Find a Row in a Table</h3>
      <span class="font-semibold">findRow</span>(table: string, attr: string, value: string): returns rows matching specific criteria. Stores values from rows in the people table where their hair is brown in the const data:
      <CopyArea> 
      const data = await ponder.findRow('people', 'hair', 'brown'); 
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Find a Cell in a Table</h3>
      <span class="font-semibold">findCell</span>(table: string, column: string, value: string): returns data from the first row matching specific criteria.
      <CopyArea> 
      ponder.findCell('people', 'name', 'corey'); 
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Add a Row to a Table</h3>
      <span class="font-semibold">insertIntoTable</span>(table: string, columns: string[], values: string[]): add a new row to an existing table.
      <CopyArea> 
      ponder.insertIntoTable(table, [column1, column2], [value1, value2]); 
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Update a Column in a Table</h3>
      <span class="font-semibold">updateTable</span>(
        table: string,<br></br>
        <span class="px-1.5">  </span>column_name: string[],<br></br>
        <span class="px-1.5">  </span>newValue: string[],<br></br>
        <span class="px-1.5">  </span>columnToMeet: string[],<br></br>
        <span class="px-1.5">  </span>valueToMeet: string[],<br></br>
        <span class="px-1.5">  </span>operator?: string
        ):
        <br></br>
        Updates columns on existing table. The properties columnToMeet and valueToMeet create the conditional statement that must be satisfied before the table is updated. Please note that update table updates the first matching table entry. The operator parameter takes the argument of either "or" or "not." If left blank, the default is "and."
      <CopyArea> 
      Ponder.updateTable(table: string, ...column: string[], ...value: string[], [q1, q2,
...], [a1, a2, ...], operator?);
      </CopyArea>
      UPDATE TABLE people SET hair_color = 'blonde', eye_color = 'hazel' WHERE name = 'Fyodor';
      <CopyArea> 
      ponder.updateTable(people, [hair_color, eye_color], ['blonde', 'hazel'], [name], ['Fyodor'])
      </CopyArea>
      UPDATE TABLE people SET hair_color = 'blonde', eye_color = 'hazel' WHERE name = 'Anton' OR birth_year = '1860';
      <CopyArea> 
      ponder.updateTable(people, [hair_color, eye_color], ['blonde', 'hazel'], [name, birth_year], ['Anton', '1860'], 'or');
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Delete a row on a Table</h3>
      <span class="font-semibold">deleteRow</span>(table: string, column: string[], value: string[]): remove an entire row of data from a table.
      <CopyArea> 
      ponder.deleteRow(hair_color, ['blonde', 'pink'], ['Clemntine']);
      </CopyArea>


      </p>
    </section>
  );
}

export function ManagingTables() {

  const copy1 = `ponder.createTable('Cats', {
    id: ["SERIAL"]
    areCute: ["VARCHAR", "20", "NOT NULL"]
    }); `;

  const copy2 = `ponder.addColumns('programmers', {
    id: ["SERIAL"]
    howSmart: ["VARCHAR", "20", "NOT NULL"]
 });`;

  const copy3 = `ponder.dropColumns('programmers', columnsToDrop: {howSmart: true});`;
  
  return (
    <section id="managingTables" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-600) font-bold">ManagingTables</h2>
      <p>
        
      <h3 class="text(xl gray-600) font-bold">Create Table</h3>
      <span class="font-semibold">createTable</span>(tableName: string, columns: any): use this method to create new tables. This method will only return a message that your table is in the database. The first parameter is a string that you'd like to use for your Table Name. The second parameter is an object. Each key of the object is a name of a column on your new table. The value will be an array of strings, where the first element is the SQL datatype, the second element is the length(optional), and third and any other elements would be column constraints you'd like to add like NULL or NOT NULL, etc. 
      <CopyArea> 
        {copy1}
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Drop One Table</h3>
      <span class="font-semibold">dropOneTable</span>(tableName: string, cascade?: boolean): Deletes an entire table. Optional boolean to include CASCADE command (default is RESTRICT).
      <CopyArea> 
      ponder.dropOneTable('Cats', true);
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Drop Multiple Tables</h3>
      <span class="font-semibold">dropMultipleTables</span>(tableNamesArray : string[], cascade?: boolean): deletes multiple tables. Optional boolean to include CASCADE command (default is RESTRICT).
      <CopyArea> 
      ponder.dropMultipleTables(['Cats', 'People'], true);
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Add Columns to an Existing Table</h3>
      <span class="font-semibold">addColumns</span>(tableToAlter : string, columns: any): Add one or more columns to existing Table. The first parameter is a string of the Table Name you'd like to alter. The second parameter is an object. Each key of the object is a name of a column on your table. The value will be an array of strings, where the first element is the SQL datatype, the second element is the length(optional), and third and any other elements would be column constraints you'd like to add like NULL or NOT NULL, etc. 
      <CopyArea> 
      {copy2}
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Drop Columns from a Table</h3>
      <span class="font-semibold">dropColumns</span>(tableName: string, columnsToDrop: any): Delete an entire column. The first argument is a string, the name of the table. The second argument is an object. The keys are the names of the columns you'd like to delete, the values are booleans (true for CASCADE, false for RESTRICT.)
      <CopyArea> 
      {copy3}
      </CopyArea>

      </p>
    </section>
  );
}

export function DatabaseIntrospection() {
  const dbintro1 = `import { Model } from './deps.ts' 

  export class person extends Model { 
  tableName = 'person' 
   static person_id = { 
      data_type: 'integer', 
      is_nullable: 'NO', 
      } 
   static name = { 
      data_type: 'character varying', 
      is_nullable: 'YES', 
      } 
   static hair_color = { 
      data_type: 'character varying', 
      is_nullable: 'YES', 
      } 
   static age = { 
      data_type: 'integer', 
      is_nullable: 'YES', 
      }  
    }`

    const dbintro2 = `export interface person { 
      name: string; 
      hair_color: string; 
      age: number; 
      height: number; 
      favorite_movie: string; 
      favorite_book: string; 
    } `;

    const model1 = 
    `newPerson.name = 'Sara';
newPerson.hair_color = 'dark brown';`;

    const update1 = `newPerson.name = 'Johannes';
newPerson.hair_color = 'black';
newPerson.age = 22;
//Invoking update function makes these changes in database
newPerson.update();
    `;

  return (
    <section id="databaseIntrospection" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-600) font-bold">Database Introspection</h2>
    
      <p>
      Ponder provides an introspect method to receive JavaScript representations of the data in your SQL Table. Because running the introspect method will create/write a new file in your file system, it is recommended to create a new file in your project root directory. Run this file using deno run to execute introspection. (If you keep your instrospect execution within another file, it may run repeated on the same database and will write unnecessary duplicates in your file system).
      <br></br>
      After importing ponder from your deps.ts file or from ponder directly, you'll need to first connect your database. After making a connection, all you need to do is invoke instrospect function:
      <CopyArea> 
      ponder.introspect();
      </CopyArea>
      You will see a new file called <span class="font-semibold">dataModels.ts</span> in your root directory that contain models of your database tables!
      <br></br>
      For example the file might look like this:
      The class person extends Model and represents the "person" table in database:
      <CopyArea> 
      {dbintro1}
      </CopyArea>
      Additionally, every class is accompanied with an interface.
      <CopyArea> 
      {dbintro2}
      </CopyArea>

      <h3 class="text(2xl gray-600) font-bold">Model Methods</h3>
      Database introspection allows the user to interact with their database through object representations of the tables.
      Create an instance of the Model :
      <CopyArea> 
      const newPerson = new person();
      </CopyArea>
      Use dot notation to assign values to properties on new object. 
      If the types are incorrect, or a value is added to a property that does not exist on model, an error will be thrown.
      <CopyArea> 
      {model1}
      </CopyArea>


      <h3 class="text(xl gray-600) font-bold">Save new row to table</h3>
      <span class="font-semibold">.save()</span> After instantiating an instance of your model, invoke the <span class="font-semibold">.save()</span> method on it to save it to you database.
      A new row will be added to the "person" table with the properties added above saved in their respective columns
      <CopyArea> 
      newPerson.save();
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Update a row</h3>
      <span class="font-semibold">.update()</span> Note that once a foreign key has been set, *you CANNOT update it* 
      If you change properties on your instance and wish to update your database with the new values, invoke the <span class="font-semibold">.update()</span> method. 
      Change properties on instance:

      <CopyArea> 
      {update1}
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Search all entries in table</h3>
      <span class="font-semibold">.search()</span> Invoking <span class="font-semibold">.search()</span> on an instance will return all the data from the table the instance is a part of. 
      Stores all data from "people" table in variable:

      <CopyArea> 
      newPerson.search();
      </CopyArea>

      <h3 class="text(xl gray-600) font-bold">Delete from table</h3>
      <span class="font-semibold">.delete()</span> Deletes row from table:

      <CopyArea> 
      newPerson.delete()
      </CopyArea>

      </p>
    </section>
  );
}


export function AssociationsDoc() {
  return (
    <section id="associationsDoc" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <h2 class="text(3xl gray-600) font-bold">Associations</h2>
      <p>
        Currently under development!
      </p>
    </section>
  );
}


export function CLI() {
  return (
    <section id="CLI" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <h2 class="text(3xl gray-600) font-bold">Ponder Command Line Interface (CLI)</h2>
      <p>
        Coming Soon! A feature for the future!
      </p>
    </section>
  );
}

export function ContributionAndBugs() {
  return (
    <section id="contributeBugs" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <h2 class="text(3xl gray-600) font-bold">Making Contributions & Finding Bugs</h2>

      <p>
      To make contributions, create a fork of the dev branch. Please be sure to utilize the Deno Typescript linter. Ensure that any changes made are reflected in the documentation. Make a pull request to the Dev branch when you have finished making your changes, note that once submitted any changes made will be covered under the MIT license.
      Feel free to contact the maintainers with any questions or concerns.
      <h3 class="text(xl gray-600) font-bold">Finding Bugs</h3>
      If you come across any bugs or issues while using Ponder feel free to report by simply opening a new issue on our Github.

      <h3 class="text(xl gray-600) font-bold">License</h3>
      MIT License

      
      </p>
    </section>
  );
};

export function AboutDoc() {
    return (
        <section id="aboutDoc" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
        <h2 class="text(3xl gray-600) font-bold">About Ponder and its Creators</h2>

        <div class='grid auto-cols-auto'>

          <div id='bioBoxMatt' class='flex flex-row m-1'>
            <img src="/mattC (1).png" class="rounded-full w-48 h-48"></img>
            <div class="ml-2 mt-auto mb-auto">
              <p>
               <h3><b>Matt Connell</b></h3>
               <h4><b>Software Engineer</b></h4>
               <a class ="flex flex-row justify-start gap-1" href="https://github.com/Matt-2112" target="_blank">GitHub <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span></a> 
                <br></br>
                <a class ="flex flex-row justify-start gap-1 -mt-4" href="https://www.linkedin.com/in/matt-connell-/" target="_blank">LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
             </p>
            </div>
          </div>

          <div id='bioBoxSam' class='flex flex-row flex-col m-1'>
               <img src="/SammyG.png" class="rounded-full w-48 h-48"></img>
               <div class="ml-2 mt-auto mb-auto">
                <p>
                <h3><b>Sam Goldenberg</b></h3>
                <h4><b>Software Engineer</b></h4>
                <a class ="flex flex-row justify-start gap-1" href="https://github.com/sammyb1rd" target="_blank">GitHub <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span></a> 
                <br></br>
                <a class ="flex flex-row justify-start gap-1 -mt-4" href="https://www.linkedin.com/in/samuel-goldenberg/" target="_blank">LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
               </p>
            </div>
          </div>

          <div id='bioBoxStella' class='flex flex-row flex-col m-1'>
            <img src="/Stella (1).png" class="rounded-full w-48 h-48"></img>
            <div class="ml-2 mt-auto mb-auto">
              <p>
               <h3><b>Stella Baek</b></h3>
               <h4><b>Software Engineer</b></h4>
            <a class ="flex flex-row justify-start gap-1 " href="https://github.com/StellaBaek" target="_blank">GitHub <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span></a> 
            <br></br>
            <a class ="flex flex-row justify-start gap-1 -mt-4" href="https://www.linkedin.com/in/stellabaek/" target="_blank">LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              </p>
            </div>
          </div>

          <div id='bioBoxCorey' class='flex flex-row flex-col m-1'>
            <img src="/Corey.png" class="rounded-full w-48 h-48"></img>
            <div class="ml-2 mt-auto mb-auto">
              <p>
               <h3><b>Corey McClendon-Brown</b></h3>
               <h4><b>Software Engineer</b></h4>
            <a class ="flex flex-row justify-start gap-1 " href="https://github.com/mcbrownc" target="_blank">GitHub <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span></a> 
            <br></br>
            <a class ="flex flex-row justify-start gap-1 -mt-4" href="https://www.linkedin.com/in/coreymcclendonbrown/" target="_blank">LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
             </p>
            </div>
          </div>

          <div id='bioBoxSara' class='flex flex-row flex-col m-1'>
            <img src="/SaraB.png" class="rounded-full w-48 h-48"></img>
            <div class="ml-2 mt-auto mb-auto">
              {/* <p> */}
               <h3><b>Sara Brown</b></h3>
               <h4><b>Software Engineer</b></h4>
              <div class ="flex flex-row justify-start">
            <a class ="flex flex-row justify-start gap-1 " href="https://github.com/Sbrown2018" target="_blank">GitHub <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></span></a> 
            </div>
            <br></br>
            <a class ="flex flex-row justify-start gap-1 -mt-4" href="https://www.linkedin.com/in/sara-brown15/" target="_blank">LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
             {/* </p> */}
            </div>
          </div>

        </div>
       
        <p>
          We are so cool.
        </p>
      </section>
    );
  }