# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Tasktracker3.Repo.insert!(%Tasktracker3.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


defmodule Seeds do
    alias Tasktracker3.Repo
    alias Tasktracker3.Users.User
    alias Tasktracker3.Tasks.Task

    def run do

        p = Comeonin.Argon2.hashpwsalt("password1")

        Repo.delete_all(User)
        a = Repo.insert!(%User{name: "alice", password_hash: p})
        b = Repo.insert!(%User{name: "bob", password_hash: p})
        c = Repo.insert!(%User{name: "carol", password_hash: p})
        d = Repo.insert!(%User{name: "dave", password_hash: p})

        Repo.delete_all(Task)
        Repo.insert!(%Task{user_id: a.id, title: "Haircut", description: "Haircut", completed: "False", time: 30 })
        Repo.insert!(%Task{user_id: b.id, title: "Bring Milk", description: "Bring Milk", completed: "True", time: 15 })
        Repo.insert!(%Task{user_id: c.id, title: "Send", description: "Send Post", completed: "False", time: 15 })
        end
end

Seeds.run