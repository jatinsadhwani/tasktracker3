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
        Repo.delete_all(User)
        a = Repo.insert!(%User{name: "alice"})
        b = Repo.insert!(%User{name: "bob"})
        c = Repo.insert!(%User{name: "carol"})
        d = Repo.insert!(%User{name: "dave"})

        Repo.delete_all(Task)
        Repo.insert!(%Task{user_id: a.id, title: "Haircut", description: "Haircut", completed: false, time: 30 })
        Repo.insert!(%Task{user_id: b.id, title: "Bring Milk", description: "Bring Milk", completed: false, time: 15 })
        Repo.insert!(%Task{user_id: c.id, title: "Send", description: "Send Post", completed: true, time: 15 })
        end
end

Seeds.run