/*
# Bob

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.

### Instructions
1. Review Bob's rules and return the appropriate response.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your bob.js file on Slack.

*/

function hey(string) {
	console.log(string);
	console.log(string.length);
	console.log(string[23]);
	console.log(string[string.length - 1]);
	if (string[string.length - 1] === ".") {
		console.log("Whatever");

		//consor.lrt(string);
	}

	return '';
}

var phrase1 = 'Tom-ay-to, tom-aaaah-to.';
hey(phrase1);
