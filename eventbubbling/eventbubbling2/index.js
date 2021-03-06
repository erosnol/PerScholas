<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js"></script>
    <script src="./index.js" defer></script>
    <title>Event Bubbling</title>
  </head>
  <style>
    ul {
      width: 300px;
    }
    li {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      border: 1px solid purple;
    }
  </style>
  <body>
    <h1>Event Bubbling</h1>
    
    <div id="main">
      <div id="container">
        <h2>List</h2>
        <ul id="list">
          <li class="list-item">List Item1 <i class="fa fa-trash"></i></li>
          <li class="list-item">List Item2 <i class="fa fa-trash"></i></li>
          <li class="list-item">List Item3 <i class="fa fa-trash"></i></li>
          <li class="list-item">List Item4 <i class="fa fa-trash"></i></li>
          <li class="list-item">List Item5 <i class="fa fa-trash"></i></li>
          <li class="list-item">List Item6 <i class="fa fa-trash"></i></li>
        </ul>
      </div>
    </div>

  </body>
</html>