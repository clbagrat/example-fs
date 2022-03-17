## Rules:

- never use double dots (../) and _locals in the same line
- never use more than one _locals
- never use absolute path together with _locals

```
import smth from '../sibling/_locals/component' // ERROR
import smth from './_locals/component/_locals/query' // ERROR
import smth from 'domains/sibling/_locals/component' //ERROR

import smth from 'domains/sibling/firstLevelComponent' // OK
```

## FAQ:

#### Should i have _locals everytime i have smth nested?

Top level of a domain should contain only files and one _locals folder.<br />
Inside _locals you can have nesting as deep as you want.


#### Can I have _locals inside a component folder that is in _locals itself?

Yes. Consider _locals to be an analog of a private field of a class. <br />
So if you really want to keep your modules from importing to your siblings, put them into _locals of yours.



#### How to understand if module is qualified to be at the top level of domain?

1) module should be as autonomous as possible. e.g. component with minimum props, pure function, react hook <br />
2) module should be imported by other domain or app
