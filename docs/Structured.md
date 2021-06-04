# Структура

```
├───.github
│   └───workflows
├───client
│   ├───app
│   │   ├───entities
│   │   │   ├───comments
│   │   │   ├───forum
│   │   │   ├───leaderboard
│   │   │   └───user
│   │   ├───resolvers
│   │   │   ├───auth
│   │   │   ├───comments
│   │   │   ├───forum
│   │   │   ├───leaderboard
│   │   │   └───users
│   │   └───utils
│   │       ├───comments
│   │       ├───forum
│   │       ├───leaderboard
│   │       └───user
│   ├───public
│   │   └───locales
│   │       ├───en
│   │       └───ru
│   └───src
│       ├───assets
│       │   ├───fonts
│       │   ├───images
│       │   │   └───icons
│       │   └───sounds
│       │       ├───music
│       │       ├───notifications
│       │       ├───ui_primary
│       │       └───ui_secondary
│       ├───component
│       │   ├───Avatar
│       │   ├───AvatarField
│       │   ├───Button
│       │   ├───ErrorBoundary
│       │   ├───ImageField
│       │   ├───Link
│       │   ├───List
│       │   │   └───ListItem
│       │   ├───Loader
│       │   ├───Meta
│       │   ├───Modal
│       │   ├───Pagination
│       │   ├───ProtectedRoute
│       │   ├───TextField
│       │   ├───Toast
│       │   ├───Toggle
│       │   └───Wrapper
│       ├───game
│       │   ├───creep
│       │   ├───img
│       │   ├───level
│       │   ├───missile
│       │   ├───model
│       │   └───turret
│       ├───hooks
│       │   ├───useAuth
│       │   └───useQuery
│       ├───pages
│       │   ├───CommentsPage
│       │   │   ├───CommentForm
│       │   │   └───CommentsList
│       │   │       ├───Comment
│       │   │       └───Like
│       │   ├───Error
│       │   ├───ForumPage
│       │   │   ├───ForumForm
│       │   │   └───ForumList
│       │   │       └───Topic
│       │   ├───Game
│       │   │   └───overlayEnd
│       │   ├───LeaderBoard
│       │   │   ├───LeaderBoardList
│       │   │   │   └───LeaderBoardItem
│       │   ├───Levels
│       │   ├───Login
│       │   ├───Menu
│       │   ├───Profile
│       │   │   ├───AvatarForm
│       │   │   ├───PasswordForm
│       │   │   └───ProfileForm
│       │   ├───Registration
│       │   └───Sandbox
│       ├───routes
│       ├───store
│       │   ├───actions
│       │   ├───reducers
│       │   │   ├───collections
│       │   │   └───widgets
│       │   ├───selectors
│       │   │   ├───collections
│       │   │   └───widgets
│       │   └───thunks
│       │       ├───collections
│       │       └───widgets
│       ├───styles
│       ├───testSetup
│       └───utils
│           └───validation
├───constants
├───database
│   ├───pgdata
│   └───tmp
├───dist
│   └───assets
│       ├───images
│       └───sounds
├───docs
│   └───media
├───nginx
│   └───conf.d
├───scripts
├───server
│   ├───controllers
│   ├───database
│   │   └───postgres
│   ├───middleware
│   │   └───render
│   ├───models
│   ├───repositories
│   ├───routes
│   ├───test
│   └───utils
├───ssl
└───webpack
    ├───alias
    ├───constants
    └───loaders
```
