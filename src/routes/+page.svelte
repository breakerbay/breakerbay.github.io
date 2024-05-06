<script>
	let name = 'World';
</script>
<main class="centered">
	<h1>Hello, {name}!</h1>

	<form class="form-group">
		<label for="name">And you are?  </label>
		<input type="text" name="name" id="name" bind:value={name} />
	</form>

</main>

<style>
	.centered {
			width: 20rem;
			margin: 0 auto;
			/*background-color: #f0f0f0;*/
      background-color: #03fcd3;
			padding: 1rem;
	}
	.form-group {
			display: flex;
			align-items: center;
			margin-bottom: 1rem;
	}
  .form-group label {
      flex: 1;  /*Let the label take up as much room as possible*/
      align-items: center;
      margin-right: 1rem; /*Add space between lable and input*/
  }
</style>

