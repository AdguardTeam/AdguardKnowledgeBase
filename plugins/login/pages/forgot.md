---
title: Forgot password

form:
    fields:
        - name: username
          type: text
          id: username
          placeholder: Username
          autofocus: true
          validate:
            required: true
            message: PLUGIN_LOGIN.USERNAME_NOT_VALID
            pattern: '^[a-z0-9_-]{3,16}$'
---


# Recover your password

Enter your username to recover your password
