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
      <ExampleDoc />
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
    { name: "AssociationsDoc", href: "#associationsDoc" },
    { name: "CLI", href: "#CLI" },
    { name: "Examples", href: "#examplesDoc" },
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
    }); `
  return (
    <section id="managingTables" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-600) font-bold">ManagingTables</h2>
      <p>
        
      <h3 class="text(xl gray-600) font-bold">Create Table</h3>
      <span class="font-semibold">createTable</span>(tableName: string, columns: any): use this method to create new tables. This method will only return a message that your table is in the database. The first parameter is a string that you'd like to use for your Table Name. The second parameter is an object. Each key of the object is a name of a column on your new table. The value will be an array of strings, where the first element is the SQL datatype, the second element is the length(optional), and third and any other elements would be column constraints you'd like to add like NULL or NOT NULL, etc. 
      <CopyArea> 
        {copy1}
      </CopyArea>

      </p>
    </section>
  );
}

export function DatabaseIntrospection() {
  return (
    <section id="databaseIntrospection" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-600) font-bold">Database Introspection</h2>
    
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque
        habitant morbi tristique senectus et netus. Viverra nibh cras pulvinar
        mattis nunc. Gravida cum sociis natoque penatibus et magnis dis
        parturient. At quis risus sed vulputate odio ut enim. Maecenas accumsan
        lacus vel facilisis volutpat est velit egestas dui. Mauris sit amet
        massa vitae tortor condimentum lacinia. Curabitur gravida arcu ac tortor
        dignissim convallis aenean et. Cursus metus aliquam eleifend mi in nulla
        posuere. Senectus et netus et malesuada fames ac. Sagittis vitae et leo
        duis ut diam.

        Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla.
        Neque sodales ut etiam sit amet nisl purus. Est lorem ipsum dolor sit
        amet consectetur adipiscing. Lacus laoreet non curabitur gravida.
        Facilisis mauris sit amet massa vitae tortor. Vulputate ut pharetra sit
        amet aliquam id. Sit amet consectetur adipiscing elit pellentesque. Nisl
        rhoncus mattis rhoncus urna neque viverra justo. Egestas sed tempus urna
        et. Pulvinar pellentesque habitant morbi tristique senectus et netus et
        malesuada. Tempor nec feugiat nisl pretium fusce id velit. Neque gravida
        in fermentum et sollicitudin ac. Enim lobortis scelerisque fermentum dui
        faucibus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Ac
        felis donec et odio pellentesque diam volutpat. Volutpat consequat
        mauris nunc congue nisi.

        Morbi enim nunc faucibus a pellentesque sit amet porttitor. Tellus
        integer feugiat scelerisque varius morbi enim nunc. Pellentesque
        habitant morbi tristique senectus et netus et. Morbi quis commodo odio
        aenean sed adipiscing diam donec. Dictumst quisque sagittis purus sit
        amet volutpat. Netus et malesuada fames ac turpis egestas sed tempus.
        Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Felis
        eget velit aliquet sagittis id consectetur purus ut faucibus. Diam quis
        enim lobortis scelerisque fermentum dui. Ac turpis egestas sed tempus
        urna et. Amet mattis vulputate enim nulla aliquet porttitor. Non odio
        euismod lacinia at quis risus sed vulputate odio. Amet porttitor eget
        dolor morbi non arcu. Purus in massa tempor nec feugiat nisl. Habitant
        morbi tristique senectus et netus et malesuada fames. Egestas diam in
        arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt
        tortor aliquam. Elit scelerisque mauris pellentesque pulvinar
        pellentesque. In est ante in nibh mauris. Nisl vel pretium lectus quam
        id.

        Orci porta non pulvinar neque. Vel turpis nunc eget lorem dolor sed
        viverra. Tempor nec feugiat nisl pretium fusce. Enim sit amet venenatis
        urna cursus. Orci phasellus egestas tellus rutrum tellus pellentesque eu
        tincidunt tortor. Ac feugiat sed lectus vestibulum mattis ullamcorper
        velit sed ullamcorper. Sagittis orci a scelerisque purus semper eget
        duis. Cursus eget nunc scelerisque viverra mauris in aliquam sem.
        Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis.
        Elit eget gravida cum sociis natoque penatibus et. Quis blandit turpis
        cursus in hac habitasse platea dictumst quisque. Faucibus turpis in eu
        mi bibendum neque egestas congue. Sit amet consectetur adipiscing elit
        duis tristique sollicitudin nibh. Vitae proin sagittis nisl rhoncus
        mattis rhoncus urna. Erat nam at lectus urna. Rhoncus est pellentesque
        elit ullamcorper dignissim. Aliquet porttitor lacus luctus accumsan
        tortor. Vitae tortor condimentum lacinia quis vel eros donec ac.

        Vitae tortor condimentum lacinia quis vel eros donec ac. Neque egestas
        congue quisque egestas diam in arcu. Et tortor consequat id porta. Enim
        sit amet venenatis urna cursus. Vel facilisis volutpat est velit egestas
        dui id ornare. At varius vel pharetra vel. Suspendisse potenti nullam ac
        tortor vitae purus faucibus ornare suspendisse. Bibendum ut tristique et
        egestas quis ipsum suspendisse ultrices. Ac turpis egestas sed tempus
        urna et pharetra pharetra massa. Maecenas ultricies mi eget mauris
        pharetra et ultrices. Pulvinar neque laoreet suspendisse interdum
        consectetur libero. Nisl nisi scelerisque eu ultrices vitae auctor eu.

        Id velit ut tortor pretium viverra suspendisse potenti. Scelerisque
        eleifend donec pretium vulputate sapien nec sagittis aliquam. Nulla
        facilisi nullam vehicula ipsum a arcu cursus vitae. Porttitor lacus
        luctus accumsan tortor posuere ac. Sit amet facilisis magna etiam tempor
        orci eu. Fermentum dui faucibus in ornare quam viverra orci. Suspendisse
        sed nisi lacus sed viverra tellus in. Odio tempor orci dapibus ultrices
        in iaculis nunc sed. Elementum integer enim neque volutpat ac tincidunt
        vitae semper quis. Feugiat in ante metus dictum at tempor commodo. Massa
        placerat duis ultricies lacus sed.

        Vel eros donec ac odio tempor. Fermentum dui faucibus in ornare.
        Facilisi morbi tempus iaculis urna. Bibendum arcu vitae elementum
        curabitur vitae nunc sed velit. Rhoncus aenean vel elit scelerisque
        mauris pellentesque pulvinar pellentesque. Vitae justo eget magna
        fermentum. Morbi tincidunt ornare massa eget egestas purus. Aliquam
        purus sit amet luctus venenatis. Vitae et leo duis ut. Tincidunt dui ut
        ornare lectus. Quam nulla porttitor massa id neque aliquam vestibulum.
        Mauris pellentesque pulvinar pellentesque habitant morbi. Pellentesque
        elit eget gravida cum sociis natoque penatibus et magnis. Vel pretium
        lectus quam id leo in vitae turpis massa. Quisque sagittis purus sit
        amet volutpat consequat. Ipsum dolor sit amet consectetur adipiscing
        elit. Blandit libero volutpat sed cras ornare arcu.

        Mi bibendum neque egestas congue quisque egestas diam in arcu. Vulputate
        mi sit amet mauris. Sed ullamcorper morbi tincidunt ornare massa eget
        egestas purus viverra. Velit egestas dui id ornare arcu odio. Elementum
        sagittis vitae et leo duis. Morbi tincidunt augue interdum velit euismod
        in pellentesque. Facilisi etiam dignissim diam quis enim lobortis
        scelerisque. Scelerisque varius morbi enim nunc faucibus a pellentesque
        sit. Arcu dui vivamus arcu felis bibendum. At varius vel pharetra vel
        turpis. Lectus mauris ultrices eros in cursus turpis. Congue nisi vitae
        suscipit tellus mauris a diam maecenas sed. Eu feugiat pretium nibh
        ipsum consequat nisl vel pretium. Id donec ultrices tincidunt arcu non
        sodales neque. Ullamcorper malesuada proin libero nunc consequat
        interdum varius sit. Ipsum nunc aliquet bibendum enim facilisis gravida
        neque convallis.

        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
        Convallis aenean et tortor at risus viverra. Bibendum est ultricies
        integer quis auctor elit sed. Egestas dui id ornare arcu. Risus quis
        varius quam quisque id diam vel quam. Arcu bibendum at varius vel
        pharetra vel. Amet nulla facilisi morbi tempus iaculis urna id volutpat
        lacus. Quis lectus nulla at volutpat diam. Laoreet id donec ultrices
        tincidunt arcu non sodales neque. Cursus sit amet dictum sit amet. Arcu
        risus quis varius quam quisque id diam. Proin nibh nisl condimentum id
        venenatis a condimentum vitae sapien. Ac odio tempor orci dapibus
        ultrices in. Id neque aliquam vestibulum morbi blandit. Sagittis eu
        volutpat odio facilisis mauris sit.

        Tempor nec feugiat nisl pretium fusce id velit. Vitae semper quis lectus
        nulla at. Arcu non odio euismod lacinia at quis risus sed vulputate.
        Morbi leo urna molestie at elementum. Suspendisse potenti nullam ac
        tortor vitae purus faucibus ornare. Id semper risus in hendrerit gravida
        rutrum. Quam nulla porttitor massa id neque. Non tellus orci ac auctor
        augue mauris augue neque gravida. Tristique magna sit amet purus gravida
        quis. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut
        placerat. Diam donec adipiscing tristique risus. In fermentum et
        sollicitudin ac orci phasellus egestas. Egestas diam in arcu cursus.
        Tincidunt augue interdum velit euismod in pellentesque massa placerat.
      </p>
    </section>
  );
}


export function AssociationsDoc() {
  return (
    <section id="associationsDoc" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <h2 class="text(3xl gray-600) font-bold">Associations</h2>
      <p>
        Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla.
        Neque sodales ut etiam sit amet nisl purus. Est lorem ipsum dolor sit
        amet consectetur adipiscing. Lacus laoreet non curabitur gravida.
        Facilisis mauris sit amet massa vitae tortor. Vulputate ut pharetra sit
        amet aliquam id. Sit amet consectetur adipiscing elit pellentesque. Nisl
        rhoncus mattis rhoncus urna neque viverra justo. Egestas sed tempus urna
        et. Pulvinar pellentesque habitant morbi tristique senectus et netus et
        malesuada. Tempor nec feugiat nisl pretium fusce id velit. Neque gravida
        in fermentum et sollicitudin ac. Enim lobortis scelerisque fermentum dui
        faucibus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Ac
        felis donec et odio pellentesque diam volutpat. Volutpat consequat
        mauris nunc congue nisi.

        Morbi enim nunc faucibus a pellentesque sit amet porttitor. Tellus
        integer feugiat scelerisque varius morbi enim nunc. Pellentesque
        habitant morbi tristique senectus et netus et. Morbi quis commodo odio
        aenean sed adipiscing diam donec. Dictumst quisque sagittis purus sit
        amet volutpat. Netus et malesuada fames ac turpis egestas sed tempus.
        Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Felis
        eget velit aliquet sagittis id consectetur purus ut faucibus. Diam quis
        enim lobortis scelerisque fermentum dui. Ac turpis egestas sed tempus
        urna et. Amet mattis vulputate enim nulla aliquet porttitor. Non odio
        euismod lacinia at quis risus sed vulputate odio. Amet porttitor eget
        dolor morbi non arcu. Purus in massa tempor nec feugiat nisl. Habitant
        morbi tristique senectus et netus et malesuada fames. Egestas diam in
        arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt
        tortor aliquam. Elit scelerisque mauris pellentesque pulvinar
        pellentesque. In est ante in nibh mauris. Nisl vel pretium lectus quam
        id.
      </p>
    </section>
  );
}


export function CLI() {
  return (
    <section id="CLI" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <h2 class="text(3xl gray-600) font-bold">Ponder Command Line Interface (CLI)</h2>
      <p>
        Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla.
        Neque sodales ut etiam sit amet nisl purus. Est lorem ipsum dolor sit
        amet consectetur adipiscing. Lacus laoreet non curabitur gravida.
        Facilisis mauris sit amet massa vitae tortor. Vulputate ut pharetra sit
        amet aliquam id. Sit amet consectetur adipiscing elit pellentesque. Nisl
        rhoncus mattis rhoncus urna neque viverra justo. Egestas sed tempus urna
        et. Pulvinar pellentesque habitant morbi tristique senectus et netus et
        malesuada. Tempor nec feugiat nisl pretium fusce id velit. Neque gravida
        in fermentum et sollicitudin ac. Enim lobortis scelerisque fermentum dui
        faucibus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Ac
        felis donec et odio pellentesque diam volutpat. Volutpat consequat
        mauris nunc congue nisi.

        Morbi enim nunc faucibus a pellentesque sit amet porttitor. Tellus
        integer feugiat scelerisque varius morbi enim nunc. Pellentesque
        habitant morbi tristique senectus et netus et. Morbi quis commodo odio
        aenean sed adipiscing diam donec. Dictumst quisque sagittis purus sit
        amet volutpat. Netus et malesuada fames ac turpis egestas sed tempus.
        Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Felis
        eget velit aliquet sagittis id consectetur purus ut faucibus. Diam quis
        enim lobortis scelerisque fermentum dui. Ac turpis egestas sed tempus
        urna et. Amet mattis vulputate enim nulla aliquet porttitor. Non odio
        euismod lacinia at quis risus sed vulputate odio. Amet porttitor eget
        dolor morbi non arcu. Purus in massa tempor nec feugiat nisl. Habitant
        morbi tristique senectus et netus et malesuada fames. Egestas diam in
        arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt
        tortor aliquam. Elit scelerisque mauris pellentesque pulvinar
        pellentesque. In est ante in nibh mauris. Nisl vel pretium lectus quam
        id.
      </p>
    </section>
  );
}

export function ExampleDoc() {
  return (
    <section id="examplesDoc" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <h2 class="text(3xl gray-600) font-bold">Examples of Ponder in Use</h2>

      <p>
        Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla.
        Neque sodales ut etiam sit amet nisl purus. Est lorem ipsum dolor sit
        amet consectetur adipiscing. Lacus laoreet non curabitur gravida.
        Facilisis mauris sit amet massa vitae tortor. Vulputate ut pharetra sit
        amet aliquam id. Sit amet consectetur adipiscing elit pellentesque. Nisl
        rhoncus mattis rhoncus urna neque viverra justo. Egestas sed tempus urna
        et. Pulvinar pellentesque habitant morbi tristique senectus et netus et
        malesuada. Tempor nec feugiat nisl pretium fusce id velit. Neque gravida
        in fermentum et sollicitudin ac. Enim lobortis scelerisque fermentum dui
        faucibus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Ac
        felis donec et odio pellentesque diam volutpat. Volutpat consequat
        mauris nunc congue nisi.

        Morbi enim nunc faucibus a pellentesque sit amet porttitor. Tellus
        integer feugiat scelerisque varius morbi enim nunc. Pellentesque
        habitant morbi tristique senectus et netus et. Morbi quis commodo odio
        aenean sed adipiscing diam donec. Dictumst quisque sagittis purus sit
        amet volutpat. Netus et malesuada fames ac turpis egestas sed tempus.
        Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Felis
        eget velit aliquet sagittis id consectetur purus ut faucibus. Diam quis
        enim lobortis scelerisque fermentum dui. Ac turpis egestas sed tempus
        urna et. Amet mattis vulputate enim nulla aliquet porttitor. Non odio
        euismod lacinia at quis risus sed vulputate odio. Amet porttitor eget
        dolor morbi non arcu. Purus in massa tempor nec feugiat nisl. Habitant
        morbi tristique senectus et netus et malesuada fames. Egestas diam in
        arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt
        tortor aliquam. Elit scelerisque mauris pellentesque pulvinar
        pellentesque. In est ante in nibh mauris. Nisl vel pretium lectus quam
        id.
      </p>
    </section>
  );
}

export function AboutDoc() {
    return (
        <section id="aboutDoc" class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
        <h2 class="text(3xl gray-600) font-bold">About Ponder and its Creators</h2>

        <div class='auto-cols-auto w-auto'>

          <div id='bioBoxMatt' class='flex-auto flex-col border border-solid border-black'>
            <img src="/mattC.png" class="rounded"></img>
            <a href="https://github.com/Matt-2112">GitHub</a> 
            <a href="https://www.linkedin.com/in/matt-connell-/">LinkedIn</a>
          </div>

        </div>
       
        <p>
          We are so cool.
        </p>
      </section>
    );
  }