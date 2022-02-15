rules:

never use double dots (../) and _locals in the same line
never use more than one _locals
never use absolute path together with _locals


import smth from '../sibling/_locals/component' // ERROR
import smth from './_locals/component/_locals/query' // ERROR
import smth from 'domains/sibling/_locals/component' //ERROR


import smth from 'domains/sibling/firstLevelComponent' // OK

FAQ:

- should i have _locals everytime i have smth nested?

yes, in case if nested code should never be imported by other domains

- How to understand if module is qualified to be at the top level of domain?

1) module should be as autonomous as possible. e.g. component with minimum props, pure function, react hook
2) module should be imported by other domain
